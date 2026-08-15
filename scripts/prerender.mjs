// Prerenders each client-side route to static HTML after `vite build`, so
// crawlers and link-preview bots that don't run JS still see real content
// and the per-page meta tags set by <SEO>.
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const routes = ["/", "/about", "/services", "/gallery", "/contact"];
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

const server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
  cwd: path.resolve(import.meta.dirname, ".."),
  stdio: "ignore",
});

try {
  await waitForServer(baseUrl);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
    const html = await page.content();

    const outDir = route === "/" ? distDir : path.join(distDir, route);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html);
    console.log(`Prerendered ${route}`);
  }

  await browser.close();
} finally {
  server.kill();
}
