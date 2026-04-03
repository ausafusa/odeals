export const siteConfig = {
  name: "ODeals",
  description:
    "ODeals curates globally styled beauty and gadget recommendations with mobile-first browsing, clear editorial summaries, and Amazon affiliate disclosures.",
  url: "https://www.odeals.shop",
  contactEmail: "hello@odeals.shop",
};

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path}`;
}
