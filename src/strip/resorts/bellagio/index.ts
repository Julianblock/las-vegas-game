import type { Resort } from '../../resort';
import { buildBellagioLakefront } from './lakefront';
import { BELLAGIO_SIGNS } from './signs';
import { bellagioStyle } from './style';
import { ARC, buildBellagioTower } from './tower';

export const bellagio: Resort = {
  id: 'bellagio',
  name: 'Bellagio',
  signs: BELLAGIO_SIGNS,
  style: bellagioStyle,
  build(k) {
    buildBellagioTower(k);
    buildBellagioLakefront(k);
  },
  // The crescent tower is hand-built; OSM only maps its crown dome.
  replaces(m, x, z) {
    const d = Math.hypot(x - ARC.cx, z - ARC.cz);
    return m.h > 30 && d > ARC.r - 30 && d < ARC.r + 30 && Math.abs(z - ARC.cz) < 140;
  },
};
