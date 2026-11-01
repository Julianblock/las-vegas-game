import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/**
 * The Cosmopolitan's twin towers (2010): smoke-blue glass with every room's
 * balcony a lit terrace, washed violet after dark.
 */
export function cosmopolitanStyle() {
  addStyle(/^The Cosmopolitan/, { color: '#4a5866', rough: 0.2, fx: FX.BALCONY, wash: 1.2, seed: 0.78, glowRgb: [0.75, 0.45, 1] });
}
