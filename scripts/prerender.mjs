// Prerenders each client-side route to static HTML after `vite build`, so
// crawlers and link-preview bots that don't run JS still see real content
// and the per-page meta tags set by <SEO>.
//
// This is a best-effort enhancement: some hosting/CI environments block or
// skip the Chromium binary download, so failures here must never break the
// build. If prerendering can't run, `dist/` just stays as the plain SPA
// build the app already works fine as.
import { execSync, spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const routes = ["/", "/about", "/why-aman-shinde", "/services", "/gallery", "/contact"];
const port = 4173;
const baseUrl = `http://localhost:${port}`;
const distDir = path.resolve(import.meta.dirname, "..", "dist");

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("Preview server did not start in time"));
      setTimeout(check, 300);
    };
    check();
  });
}

async function launchChromium() {
  try {
    return await chromium.launch();
  } catch {
    try {
      execSync("npx playwright install chromium", { stdio: "inherit" });
      return await chromium.launch();
    } catch {
      return null;
    }
  }
}

const server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: path.resolve(import.meta.dirname, ".."),
  stdio: "ignore",
});

try {
  await waitForServer(baseUrl);

  const browser = await launchChromium();
  if (!browser) {
    console.warn(
      "Skipping prerendering: Chromium isn't available in this environment. " +
        "Shipping the regular client-rendered build instead."
    );
  } else {
    const page = await browser.newPage();

    for (const route of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });

      // The hero uses a CSS background-image, which the browser's preload
      // scanner can't see. Find it and emit a <link rel="preload"> so the
      // download starts during HTML parse instead of after CSS/layout — this
      // is what the page's Largest Contentful Paint is waiting on.
      const heroUrl = await page.evaluate(() => {
        for (const el of document.querySelectorAll("section, div")) {
          const bg = getComputedStyle(el).backgroundImage;
          const m = bg && bg.match(/url\(["']?([^"')]+)["']?\)/);
          if (m) return m[1];
        }
        return null;
      });

      let html = await page.content();
      if (heroUrl) {
        const href = new URL(heroUrl, baseUrl).pathname;
        html = html.replace(
          "</head>",
          `  <link rel="preload" as="image" href="${href}" fetchpriority="high">\n</head>`
        );
      }

      const outDir = route === "/" ? distDir : path.join(distDir, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html);
      console.log(`Prerendered ${route}${heroUrl ? " (+hero preload)" : ""}`);
    }

    await browser.close();
  }
} catch (err) {
  console.warn("Skipping prerendering due to an error:", err.message);
} finally {
  server.kill();
}
