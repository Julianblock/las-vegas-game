import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/** Venetian and Venezia towers in sand-pink stucco; the Palazzo in warmer peach. */
export function venetianStyle() {
  addStyle(/^(Venetian Tower|Venezia Tower)$/, { color: '#f2dfc8', rough: 0.75, fx: FX.WINDOWS, wash: 1.1, seed: -81, glowRgb: [1, 0.8, 0.55] });
  addStyle(/^Palazzo Tower$/, { color: '#f0c898', rough: 0.7, fx: FX.WINDOWS, wash: 1.1, seed: -82, glowRgb: [1, 0.75, 0.45] });
}
