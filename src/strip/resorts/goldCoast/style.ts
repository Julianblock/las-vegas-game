import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Gold Coast (1986): a sand-stucco locals' casino slab with gold window bands. */
export function goldCoastStyle() {
  addZone(36.11708, -115.19260, 110, { color: '#e2cfa4', rough: 0.8, fx: FX.WINDOWS, wash: 1, seed: -0.13, glowRgb: [1, 0.8, 0.35] }, 25);
}
