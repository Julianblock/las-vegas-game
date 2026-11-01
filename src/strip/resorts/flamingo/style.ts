import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Pink-washed cream towers: the Flamingo's floodlit facades glow magenta at night. */
export function flamingoStyle() {
  addZone(36.1165, -115.1715, 140, { color: '#efd8d2', rough: 0.7, fx: FX.WINDOWS, wash: 1.4, seed: 21.91, glowRgb: [1, 0.25, 0.6] }, 30);
}
