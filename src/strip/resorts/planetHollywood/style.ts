import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** Planet Hollywood (2000 as the Aladdin, rebranded 2007): white tower, cool blue-white windows. */
export function planetHollywoodStyle() {
  addStyle(/Planet Hollywood/, { color: '#e4e6ea', rough: 0.55, fx: FX.WINDOWS, wash: 1, seed: 0.37, glowRgb: [0.75, 0.85, 1] }, 20);
}
