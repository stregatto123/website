/**
 * Helper to fetch offers from the public JSON file. Returns an array of offers.
 */
export async function getOffers() {
  const res = await fetch('/offers.json', { cache: 'no-store' });
  return res.json();
}