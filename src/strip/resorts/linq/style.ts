import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** The LINQ (the Imperial Palace until 2012, re-skinned in white and violet glass). */
export function linqStyle() {
  addStyle(/^The LINQ Hotel/, { color: '#e8e6ee', rough: 0.55, fx: FX.GLASS, wash: 1.2, seed: 71.78, glowRgb: [0.7, 0.4, 1] });
}
