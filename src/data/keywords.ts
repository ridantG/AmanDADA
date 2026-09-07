// SEO keyword set for Anchor Aman Shinde. Fed into <meta name="keywords"> and
// the Person JSON-LD (`knowsAbout`) on every page via <SEO>. Visible keyword
// stuffing is intentionally avoided — search engines penalise it.
const GROUPS: string[][] = [
  // Core anchor
  [
    "Anchor in Delhi", "Professional Anchor in Delhi", "Event Anchor in Delhi",
    "Male Anchor in Delhi", "Best Anchor in Delhi", "Wedding Anchor in Delhi",
    "Wedding Emcee in Delhi", "Wedding Host in Delhi", "Event Host in Delhi",
    "Professional Emcee in Delhi", "Professional Event Host in Delhi",
    "Anchor for Events in Delhi", "Anchor for Wedding in Delhi",
    "Best Wedding Anchor in Delhi", "Wedding Anchor Near Me",
    "Event Anchor Near Me", "Professional Anchor Near Me",
  ],
  // Wedding & celebration
  [
    "Wedding Event Anchor in Delhi", "Sangeet Anchor in Delhi", "Haldi Anchor in Delhi",
    "Varmala Anchor in Delhi", "Mehendi Anchor in Delhi", "Ring Ceremony Anchor in Delhi",
    "Wedding Games Anchor in Delhi", "Wedding Entertainment Anchor in Delhi",
    "Wedding Celebration Host in Delhi", "Interactive Wedding Anchor in Delhi",
    "Fun Wedding Anchor in Delhi", "Wedding Ceremony Host in Delhi",
  ],
  // Destination wedding
  [
    "Destination Wedding Anchor in Delhi", "Destination Wedding Emcee in Delhi",
    "Destination Wedding Host in Delhi", "Best Destination Wedding Anchor",
    "Destination Wedding Anchor Near Me", "Wedding Anchor for Destination Wedding",
    "Destination Wedding Event Host", "Destination Wedding Emcee",
    "Destination Wedding Entertainment Anchor", "Destination Wedding Games & Activities Host",
    "Destination Wedding Anchor in Gwalior", "Destination Wedding Anchor in Indore",
  ],
  // Gwalior
  [
    "Anchor in Gwalior", "Best Anchor in Gwalior", "Professional Anchor in Gwalior",
    "Event Anchor in Gwalior", "Event Host in Gwalior", "Wedding Anchor in Gwalior",
    "Best Wedding Anchor in Gwalior", "Wedding Emcee in Gwalior", "Wedding Host in Gwalior",
    "Sangeet Anchor in Gwalior", "Haldi Anchor in Gwalior", "Varmala Anchor in Gwalior",
    "Wedding Games Anchor in Gwalior", "Corporate Event Anchor in Gwalior",
    "Male Anchor in Gwalior", "Anchor for Wedding in Gwalior",
  ],
  // Indore
  [
    "Anchor in Indore", "Best Anchor in Indore", "Professional Anchor in Indore",
    "Event Anchor in Indore", "Event Host in Indore", "Wedding Anchor in Indore",
    "Best Wedding Anchor in Indore", "Wedding Emcee in Indore", "Wedding Host in Indore",
    "Sangeet Anchor in Indore", "Haldi Anchor in Indore", "Varmala Anchor in Indore",
    "Wedding Games Anchor in Indore", "Corporate Event Anchor in Indore",
    "Male Anchor in Indore", "Anchor for Wedding in Indore",
  ],
  // Fun, games & activities
  [
    "Wedding Games Anchor", "Wedding Games Host", "Wedding Fun Games Anchor",
    "Wedding Activities Host", "Wedding Entertainment Host", "Interactive Wedding Anchor",
    "Fun & Games Anchor", "Couple Games Anchor", "Family Games Anchor",
    "Sangeet Games Anchor", "Haldi Games Anchor", "Wedding Audience Engagement",
    "Wedding Crowd Engagement", "Interactive Event Host", "Fun Event Anchor",
    "Team Building Expert Anchor", "Team Building Event Host", "Corporate Team Building Anchor",
  ],
  // Corporate & event
  [
    "Corporate Event Anchor in Delhi", "Best Corporate Event Anchor in Delhi",
    "Professional Corporate Event Host", "Corporate Emcee in Delhi",
    "Corporate Event Host in Delhi", "Team Building Anchor in Delhi",
    "Team Building Expert Anchor in Delhi", "Event Host for Corporate Events",
    "Corporate Entertainment Anchor", "Conference Anchor in Delhi",
    "Award Function Anchor in Delhi", "Product Launch Anchor in Delhi",
    "Annual Function Anchor in Delhi", "College Event Anchor in Delhi",
    "Public Event Anchor in Delhi",
  ],
  // Budget / price
  [
    "Affordable Wedding Anchor in Delhi", "Budget-Friendly Wedding Anchor",
    "Affordable Event Anchor in Delhi", "Budget Wedding Anchor in Delhi",
    "Wedding Anchor Price in Delhi", "Wedding Anchor Cost in Delhi",
    "Wedding Emcee Price in Delhi", "Wedding Host Price in Delhi",
    "Affordable Wedding Emcee", "Reasonable Wedding Anchor",
    "Professional Anchor at Affordable Price", "Budget-Friendly Event Host",
    "Affordable Destination Wedding Anchor",
  ],
  // Near me / high-intent
  [
    "Wedding Emcee Near Me", "Wedding Host Near Me", "Event Host Near Me",
    "Sangeet Anchor Near Me", "Haldi Anchor Near Me", "Varmala Anchor Near Me",
    "Destination Wedding Anchor Near Me", "Male Anchor Near Me",
    "Affordable Wedding Anchor Near Me",
  ],
  // Personal brand
  [
    "Anchor Aman Shinde", "Anchor Aman Shinde Delhi", "Anchor Aman Shinde Gwalior",
    "Anchor Aman Shinde Indore", "Aman Shinde Anchor", "Aman Shinde Wedding Anchor",
    "Aman Shinde Wedding Emcee", "Aman Shinde Event Host", "The Mic Magician",
    "Anchor Aman Shinde The Mic Magician", "Best Anchor Aman Shinde",
    "Professional Anchor Aman Shinde",
  ],
];

// Flat, de-duplicated (case-insensitive), original order preserved.
export const KEYWORDS: string[] = (() => {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const kw of GROUPS.flat()) {
    const k = kw.toLowerCase();
    if (!seen.has(k)) {
      seen.add(k);
      out.push(kw);
    }
  }
  return out;
})();

export const KEYWORDS_META = KEYWORDS.join(", ");
