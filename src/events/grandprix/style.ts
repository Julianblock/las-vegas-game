import { FX } from '../../world/builders';
import { addZone } from '../../strip/massStyles';

/** The Grand Prix Plaza (2023): a long white pit building with a skin of panels, no hotel windows. */
export function plazaStyle() {
  addZone(36.10998, -115.16186, 170, { color: '#e8e8ea', rough: 0.35, fx: FX.METAL, wash: 0.3, seed: 0.2, glowRgb: [1, 1, 1] });
}
