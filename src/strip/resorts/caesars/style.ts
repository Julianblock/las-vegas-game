import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/**
 * Caesars' towers: the white Palace and Augustus towers with blue-green glass
 * bands, the older Roman-arched Forum and Centurion (Julius) towers in cream,
 * all floodlit in cool white.
 */
export function caesarsStyle() {
  addStyle(/^(Palace|Augustus|Octavius) Tower$/, { color: '#eef0ee', rough: 0.55, fx: FX.GLASS, wash: 1.2, seed: 31.55, glowRgb: [0.7, 0.85, 1] });
  addStyle(/^(Forum Tower|Julius Tower|Julius Tower Extension)$/, { color: '#e6dcc6', rough: 0.7, fx: FX.WINDOWS, wash: 1.1, seed: -32, glowRgb: [1, 0.85, 0.6] });
  addStyle(/^Nobu Hotel at Caesars Palace$/, { color: '#d8d2c4', rough: 0.6, fx: FX.WINDOWS, wash: 0.9, seed: -33, glowRgb: [1, 0.8, 0.6] });
  addStyle(/^The Forum Shops at Caesars$|^Caesars Palace Convention Center$/, { color: '#e9e0cc', rough: 0.8, fx: FX.WASH, wash: 0.6, seed: -34, glowRgb: [1, 0.8, 0.55] });
}
