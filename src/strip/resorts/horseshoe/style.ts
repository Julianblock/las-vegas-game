import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Bally's-era towers: off-white with dark ribbon windows, floodlit red-gold since the Horseshoe rebrand. */
export function horseshoeStyle() {
  addZone(36.1137, -115.1701, 120, { color: '#e2ddd2', rough: 0.65, fx: FX.WINDOWS, wash: 1, seed: 51.03, glowRgb: [1, 0.35, 0.2] }, 40);
}
