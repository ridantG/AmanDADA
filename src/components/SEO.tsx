import { useEffect } from "react";
import { KEYWORDS, KEYWORDS_META } from "../data/keywords";
import { SOCIALS } from "../data/site";

export const SITE_URL = "https://anchor-aman-shinde.shaadisamadhan.com";
const SITE_NAME = "Anchor Aman Shinde";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

// Person schema — the machine-readable version of the keyword list. `knowsAbout`
// carries the topics without stuffing them into visible copy.
function setJsonLd() {
  const id = "ld-person";
  let tag = document.getElementById(id) as HTMLScriptElement | null;
  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aman Shinde",
    alternateName: "The Mic Magician",
    jobTitle: "Event Anchor & Emcee",
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    sameAs: Object.values(SOCIALS),
    knowsAbout: KEYWORDS,
    areaServed: ["Delhi NCR", "Gwalior", "Indore", "India"],
  });
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export default function SEO({ title, description, path, noindex }: SEOProps) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "keywords", KEYWORDS_META);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(url);
    setJsonLd();

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
  }, [title, description, path, noindex]);

  return null;
}
