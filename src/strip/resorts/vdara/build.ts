import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** Vdara's name on the tall crescent's north face and on the low wing's south face. */
export function buildVdara(k: Kit) {
  k.sign(k.frame(1071, 706.5, 0), 'vdaraWord', 0, 162, 0, 9, 1.2, FX.NEON);
  k.sign(k.frame(1074, 730.5, 180), 'vdaraWord', 0, 128, 0, 8, 1.2, FX.NEON);
}
