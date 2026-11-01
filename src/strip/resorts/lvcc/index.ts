import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { faceFrame } from '../../parts/face';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import type { Resort } from '../../resort';
import { lvccName, lvccScreen } from './signs';
import { lvccStyle } from './style';

/**
 * The Las Vegas Convention Center: two million square feet of halls off
 * Paradise Road, the glass West Hall of 2021, and the marquee at the corner.
 */
function buildLvcc(k: Kit) {
  k.sign(k.frame(3199.4, -1900, 270), 'lvccName', 0, 13, 0, 4.5, 1.2, FX.NEON);
  k.sign(faceFrame(k, 2983, -2217, 3115, -1854, 2900, -2000, 0.6).fr, 'lvccName', 0, 14, 0, 5, 1.2, FX.NEON);
  const corner = k.frame(3194, -1790, 0);
  pylon(k, corner, 0, 0, { crown: 'lvccName', screen: 'lvccScreen', h: 30, w: 18, color: '#1c2a34', crownH: 2.2 });
  palmRow(k, k.frame(3192, -1900, 270), -50, 0, 50, 0, 12, 11);
}

export const lvcc: Resort = {
  id: 'lvcc',
  name: 'Las Vegas Convention Center',
  signs: [lvccName, lvccScreen],
  style: lvccStyle,
  build: buildLvcc,
};
