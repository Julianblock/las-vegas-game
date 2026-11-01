import type { Resort } from '../../resort';
import { buildCove } from './cove';
import { tiCrown } from './signs/crown';
import { tiLED } from './signs/led';
import { buildTiTower, TI } from './tower';

export const ti: Resort = {
  id: 'ti',
  name: 'Treasure Island',
  signs: [tiCrown, tiLED],
  build(k) {
    buildTiTower(k);
    buildCove(k);
  },
  replaces: (m, x, z) => m.h > 60 && Math.hypot(x - TI.x, z - TI.z) < 40,
};
