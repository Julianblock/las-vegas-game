import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** The 67-storey crescent in pale blue reflective glass. */
export function fbStyle() {
  addZone(36.13785, -115.15946, 95, { color: '#5d84aa', rough: 0.15, fx: FX.GLASS, wash: 1, seed: 0.61, glowRgb: [0.6, 0.8, 1] }, 150);
}
