import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** The convention halls: pale grey sheds, and the West Hall's glass wall and white roof. */
export function lvccStyle() {
  addStyle(/West Hall Expansion/, { color: '#dfe6ea', rough: 0.25, fx: FX.GLASS, wash: 0.7, seed: -0.55, glowRgb: [0.8, 0.9, 1] });
  addStyle(/^Las Vegas Convention Center$/, { color: '#d8d8d4', rough: 0.6, fx: FX.WASH, wash: 0.5, seed: -0.3, glowRgb: [0.9, 0.9, 0.9] });
}
