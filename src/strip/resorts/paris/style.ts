import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** Le Boulevard tower: Hôtel de Ville cream with gold-lit windows. */
export function parisStyle() {
  addStyle(/^Le Boulevard At Paris$/, { color: '#ede1c8', rough: 0.7, fx: FX.WINDOWS, wash: 1.1, seed: -61, glowRgb: [1, 0.78, 0.45] });
  addStyle(/^Paris Las Vegas$/, { color: '#e6dac2', rough: 0.8, fx: FX.WASH, wash: 0.5, seed: -62, glowRgb: [1, 0.75, 0.45] });
}
