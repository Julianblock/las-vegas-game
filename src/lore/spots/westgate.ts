import type { Spot } from '../spot';
import { ll, near } from '../tests';

export const westgateSpot: Spot = {
  id: 'westgate',
  kind: 'lore',
  kicker: 'Westgate, once the International · 1969',
  title: 'Elvis has left the building',
  text: 'The International opened in 1969 as the biggest hotel in the world, and Elvis played its showroom 837 times in a row, every one sold out. It was the Las Vegas Hilton for decades, and his statue still stands in the lobby.',
  at: ll(36.1361, -115.1527),
  hint: 'Fly east of the Strip to the big hotel by the convention centre.',
  r: 260,
  h: 100,
  test: near(ll(36.1361, -115.1527), 160, 120),
};
