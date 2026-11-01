import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { STRIP_HALF, stripX } from '../../streets';
import { fbCrown, fbLED } from './signs';
import { fbStyle } from './style';

/** Fontainebleau's bow-tie atrium motif in glowing white along the podium. */
function bowTies(k: Kit, x: number, z: number) {
  const fr = k.frame(x, z, 270);
  k.box(fr, 0, -1, -12, 72, 15, 24, '#cdd6e2', { rough: 0.3, fx: FX.GLASS });
  for (let i = -3; i <= 3; i++) {
    for (const s of [-1, 1]) k.box(fr, i * 9 + s * 1.6, 9, 0.4, 3, 4, 0.3, '#f4f8ff', { rough: 0.3, fx: FX.NEON }, s * 0.6);
  }
}

/**
 * Fontainebleau (begun 2007, stalled for fifteen years as the Strip's tallest
 * empty shell, opened December 2023): the blue-glass crescent, its name on
 * the crown, bow-tie lights on the podium and the marquee on the east kerb.
 */
function buildFB(k: Kit) {
  k.sign(k.frame(2694, -2475, 263), 'fbCrown', 0, 214, 0.8, 5.5, 1.3, FX.NEON);
  k.sign(k.frame(2757, -2401, 180), 'fbCrown', 0, 214, 0.8, 5.5, 1.3, FX.NEON);
  const z = -2440;
  const walk = k.frame(stripX(z) + STRIP_HALF - 2, z, 270);
  pylon(k, walk, 0, 0, { crown: 'fbCrown', screen: 'fbLED', h: 30, w: 17, color: '#d8dce4', crownH: 3 });
  palmRow(k, walk, -90, 4, -8, 4, 11, 14);
  palmRow(k, walk, 10, 4, 90, 4, 11, 14);
  bowTies(k, stripX(z) + STRIP_HALF + 20, z);
}

export const fontainebleau: Resort = {
  id: 'fontainebleau',
  name: 'Fontainebleau',
  signs: [fbCrown, fbLED],
  style: fbStyle,
  build: buildFB,
};
