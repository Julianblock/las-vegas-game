import type { Spot } from '../spot';
import { near } from '../tests';

export const fashionShowSpot: Spot = {
  id: 'fashion-show',
  kind: 'lore',
  kicker: 'Fashion Show · 1981',
  title: 'A cloud over the Strip',
  text: 'The mall’s steel Cloud floats above its plaza and doubles as a giant screen. On weekends a catwalk rises out of the floor inside for live fashion shows.',
  at: { x: 1932, z: -1252 },
  hint: 'Fly under the Cloud canopy at Fashion Show.',
  r: 160,
  h: 50,
  test: near({ x: 1932, z: -1252 }, 90, 60),
};
