import type { Resort } from '../../resort';
import { flamingoZ } from '../../streets';
import { buildMedian } from './median';
import { shelter } from './shelter';
import { rtc202, shelterAd } from './signs';
import { buildSignals } from './signals';
import { STOPS } from './stops';
import { CROSS_BLADES, FLAMINGO_BLADES } from './streetNames';

/** Flamingo Road’s streetscape: median palms west of the freeway and the 202’s bus shelters. */
export const flamingoRoad: Resort = {
  id: 'flamingoRoad',
  name: 'Flamingo Road streetscape',
  signs: [rtc202, shelterAd],
  build: (k) => {
    buildMedian(k);
    for (const s of STOPS) {
      const fr = k.frame(s.x, flamingoZ(s.x) + s.side * s.off, s.side > 0 ? 0 : 180);
      if (!k.occupies(s.x, flamingoZ(s.x) + s.side * s.off)) shelter(k, fr);
    }
  },
};
