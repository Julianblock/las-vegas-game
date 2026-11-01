import type { Spot } from '../spot';
import { near } from '../tests';

export const springsPreserveSpot: Spot = {
  id: 'springs-preserve',
  kind: 'lore',
  kicker: 'Las Vegas Springs · 1829',
  title: 'The meadows',
  text: 'Las Vegas means the meadows. Artesian springs here watered a green valley that Spanish traders on the Old Spanish Trail named in 1829; they fed the railroad town until the wells drew them dry in 1962. The preserve tells the story of water in the desert.',
  at: { x: 104, z: -6049 },
  hint: 'Fly west of downtown along US 95.',
  r: 260,
  h: 80,
  test: near({ x: 104, z: -6049 }, 220, 80),
};
