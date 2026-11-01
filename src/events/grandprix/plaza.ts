import { FX } from '../../world/builders';
import type { Kit } from '../../strip/kit';
import { faceFrame } from '../../strip/parts/face';
import { pylon } from '../../strip/parts/pylon';

/** The Grand Prix Plaza's frontage: the wordmark down its track face and a screen at Koval and Harmon. */
export function buildPlaza(k: Kit) {
  const face = faceFrame(k, 2641, 584.7, 2516.2, 726.6, 2530, 672, 0.6).fr;
  k.sign(face, 'gpWord', 0, 10.5, 0, 7, 1.6, FX.NEON);
  pylon(k, k.frame(2362, 872, 200), 0, 0, { crown: 'gpWord', screen: 'gpLED', h: 18, w: 14, color: '#111111', crownH: 2.2 });
}
