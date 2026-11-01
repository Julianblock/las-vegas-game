import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { faceFrame } from '../../parts/face';

/** The Platinum's name across the top of its Flamingo face. */
export function buildPlatinum(k: Kit) {
  const { fr } = faceFrame(k, 2126, 80, 2251, 85, 2192, 74, 0.5);
  k.sign(fr, 'platinumWord', 0, 47, 0, 6, 1.2, FX.NEON);
}
