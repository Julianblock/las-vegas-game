import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';

/**
 * The Rio's carnival glass: the 1990 Ipanema tower in red, the Masquerade
 * tower (1997) in cobalt, both banded white and washed in their own colour
 * after dark.
 */
export function rioStyle() {
  addStyle(/^Rio Ipanema Tower$/, { color: '#c0343e', rough: 0.3, fx: FX.GLASS, wash: 1.2, seed: 0.98, glowRgb: [1, 0.2, 0.25] });
  addStyle(/^(Rio Masquerade Tower|Voodoo steakhouse)$/, { color: '#2a4aa8', rough: 0.3, fx: FX.GLASS, wash: 1.2, seed: 0.62, glowRgb: [0.3, 0.45, 1] });
}
