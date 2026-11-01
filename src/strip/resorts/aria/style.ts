import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/**
 * CityCenter's glass (2009): Aria's two crescents in silver-blue curtain
 * wall, Vdara's three-lobed crescent beside them in a cooler grey.
 */
export function ariaStyle() {
  addZone(36.10781, -115.17689, 150, { color: '#a4b4c4', rough: 0.15, fx: FX.GLASS, wash: 0.9, seed: 0.58, glowRgb: [0.75, 0.85, 1] }, 120);
  addZone(36.10958, -115.17807, 60, { color: '#8a9aa8', rough: 0.15, fx: FX.GLASS, wash: 0.8, seed: 0.55, glowRgb: [0.7, 0.8, 1] }, 120);
}
