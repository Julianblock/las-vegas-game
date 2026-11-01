import { merge, withPart } from '../../world/geom';
import { box, PART, taper, wheels } from './shapes';

/** Full-size pickup with an open bed. */
export function pickupGeometry() {
  return merge([
    withPart(box(5.8, 0.55, 1.98, 0, 0.45, 0), PART.PAINT),
    withPart(box(2.1, 0.32, 1.96, 1.75, 1.0, 0), PART.PAINT),
    withPart(taper(box(1.9, 0.6, 1.8, 0.35, 1.0, 0), 1.3, 0.85, 0.94, -0.05), PART.GLASS),
    withPart(box(1.5, 0.06, 1.66, 0.3, 1.6, 0), PART.PAINT),
    withPart(box(2.2, 0.42, 0.08, -1.75, 1.0, 0.95), PART.PAINT),
    withPart(box(2.2, 0.42, 0.08, -1.75, 1.0, -0.95), PART.PAINT),
    withPart(box(0.08, 0.42, 1.98, -2.86, 1.0, 0), PART.PAINT),
    ...wheels([1.85, -1.75], 0.4, 0.86, 0.28),
  ]);
}
