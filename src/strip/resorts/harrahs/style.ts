import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Harrah's cream chevron and Mardi Gras tower, washed carnival gold at night. */
export function harrahsStyle() {
  addZone(36.11948, -115.17008, 110, { color: '#efe2c8', rough: 0.7, fx: FX.WINDOWS, wash: 1.3, seed: 0.12, glowRgb: [1, 0.72, 0.3] }, 40);
}
