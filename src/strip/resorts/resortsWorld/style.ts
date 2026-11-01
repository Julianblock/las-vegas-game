import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** Copper-red glass, the colour Genting chose for the old Stardust site. */
export function rwStyle() {
  addStyle(/Resorts World/i, { color: '#9a3a2a', rough: 0.25, fx: FX.GLASS, wash: 1, seed: 0.52, glowRgb: [1, 0.35, 0.25] });
}
