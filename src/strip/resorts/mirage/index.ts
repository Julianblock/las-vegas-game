import type { Resort } from '../../resort';
import { buildGuitarSite } from './guitar';
import { hardRockCrown } from './signs/crown';
import { hardRockBanner } from './signs/hardRock';
import { buildMirageTower, MIRAGE } from './tower';

export const mirage: Resort = {
  id: 'mirage',
  name: 'The Mirage (becoming Hard Rock)',
  signs: [hardRockCrown, hardRockBanner],
  build(k) {
    buildMirageTower(k);
    buildGuitarSite(k);
  },
  replaces: (m, x, z) => m.h > 60 && Math.hypot(x - MIRAGE.x, z - MIRAGE.z) < 40,
};
