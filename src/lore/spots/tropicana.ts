import type { Spot } from '../spot';
import { near } from '../tests';

export const tropicanaSpot: Spot = {
  id: 'tropicana',
  kind: 'lore',
  kicker: 'Tropicana · 1957–2024',
  title: 'The Tiffany of the Strip',
  text: 'The Trop opened in 1957 with a mob ledger found in a gangster’s pocket showing its skim. It ran for 67 years until it was imploded in October 2024 to make room for a baseball stadium for the A’s, now rising on its corner.',
  at: { x: 1720, z: 1880 },
  hint: 'Fly over the construction site on the southeast corner of Tropicana and the Strip.',
  r: 300,
  h: 110,
  test: near({ x: 1720, z: 1880 }, 160, 120),
};
