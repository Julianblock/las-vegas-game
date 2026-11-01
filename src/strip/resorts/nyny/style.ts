import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/**
 * The skyline's towers (1997): a Manhattan of limestone, brick and terracotta
 * setbacks, each a different hue by its seed, warm-lit windows at night.
 */
export function nynyStyle() {
  addZone(36.1022, -115.1749, 90, { color: '#c8b49a', rough: 0.8, fx: FX.WINDOWS, wash: 0.9, seed: -0.3, glowRgb: [1, 0.85, 0.6] }, 60);
}
