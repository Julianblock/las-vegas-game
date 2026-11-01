import { FX } from '../../../world/builders';
import { addStyle, addZone } from '../../massStyles';

/**
 * The Palms' champagne main tower (2001), the curved glass Fantasy tower
 * (2006) and Palms Place's blue-green glass condo tower (2008).
 */
export function palmsStyle() {
  addZone(36.11488, -115.19420, 30, { color: '#ddd0b2', rough: 0.6, fx: FX.WINDOWS, wash: 1.1, seed: -0.41, glowRgb: [1, 0.85, 0.6] }, 60);
  addStyle(/^Palms Fantasy Tower$/, { color: '#b8c8d4', rough: 0.25, fx: FX.GLASS, wash: 1.1, seed: 0.55, glowRgb: [0.5, 0.8, 1] });
  addStyle(/^Palms Place$/, { color: '#8eb0c0', rough: 0.2, fx: FX.GLASS, wash: 0.9, seed: 0.5, glowRgb: [0.45, 0.85, 0.9] });
}
