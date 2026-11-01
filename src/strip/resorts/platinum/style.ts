import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** The Platinum (2006): a slim white all-suite slab on East Flamingo, no casino. */
export function platinumStyle() {
  addZone(36.11534, -115.16562, 60, { color: '#e9e6df', rough: 0.5, fx: FX.WINDOWS, wash: 0.6, seed: 0.55, glowRgb: [0.9, 0.95, 1] }, 40);
}
