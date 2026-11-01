import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** The Spa Tower and podium behind the lake share the main tower's warm cream. */
export function bellagioStyle() {
  addZone(36.111, -115.1772, 60, { color: '#ece0c6', rough: 0.7, fx: FX.WINDOWS, wash: 1, seed: -41, glowRgb: [1, 0.82, 0.55] }, 30);
  addZone(36.1131, -115.1761, 110, { color: '#e8dcc4', rough: 0.8, fx: FX.WASH, wash: 0.5, seed: -42, glowRgb: [1, 0.8, 0.55] });
}
