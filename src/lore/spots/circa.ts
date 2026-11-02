import type { Spot } from '../spot';
import { near } from '../tests';

export const circaSpot: Spot = {
  id: 'circa',
  kind: 'lore',
  kicker: 'Circa · Fremont and Main',
  title: 'Vickie comes in from the cold',
  text: 'Circa opened in 2020, the first casino built from the ground up downtown in forty years. It took over Vegas Vickie, the kicking cowgirl sign from the old Glitter Gulch, restored her and hung her inside over the bar.',
  at: { x: 3990, z: -6206 },
  hint: 'Go to the tall tower at the west end of Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 3990, z: -6206 }, 110, 50),
};
