import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Vdara (2009): three staggered crescents of silver-blue glass behind Aria. */
export function vdaraStyle() {
  addZone(36.10953, -115.17804, 70, { color: '#9fb3c4', rough: 0.15, fx: FX.GLASS, wash: 0.4, seed: 0.58, glowRgb: [0.85, 0.92, 1] }, 100);
}
