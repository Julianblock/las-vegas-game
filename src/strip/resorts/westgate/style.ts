import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Westgate (1969 as the International): the cream Y tower off Paradise Road. */
export function westgateStyle() {
  addZone(36.1361, -115.1514, 140, { color: '#ece4d4', rough: 0.7, fx: FX.WINDOWS, wash: 1, seed: 0.53, glowRgb: [1, 0.86, 0.62] }, 40);
}
