import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Allegiant Stadium (2020): the black glass "Death Star" west of I-15. */
export function allegiantStyle() {
  addZone(36.0908, -115.1832, 150, { color: '#16171c', rough: 0.15, fx: FX.GLASS, wash: 0.6, seed: -0.4, glowRgb: [0.9, 0.9, 1] }, 30);
}
