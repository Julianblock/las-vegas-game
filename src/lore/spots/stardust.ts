import type { Spot } from '../spot';
import { near } from '../tests';

export const stardustSpot: Spot = {
  id: 'stardust',
  kind: 'lore',
  kicker: 'Resorts World, once the Stardust · 1958',
  title: 'Casino',
  text: 'Frank “Lefty” Rosenthal ran the Stardust for the Chicago Outfit while the mob skimmed its counting room; Martin Scorsese told the story in Casino. The Stardust was imploded in 2007, and Resorts World opened on its ground in 2021.',
  at: { x: 2142, z: -2083 },
  hint: 'Fly past the copper towers on the west side of the north Strip.',
  r: 300,
  h: 140,
  test: near({ x: 2142, z: -2083 }, 180, 200),
};
