import { merge, withPart } from '../../world/geom';
import { box, PART, taper, wheels } from './shapes';

/** Sedan: body, shoulder, tapered glasshouse and roof. */
export function carGeometry() {
  const cabin = taper(box(2.5, 0.52, 1.62, -0.2, 1.02, 0), 1.3, 0.72, 0.9, -0.15);
  return merge([
    withPart(box(4.7, 0.42, 1.82, 0, 0.32, 0), PART.PAINT),
    withPart(taper(box(4.6, 0.3, 1.8, 0, 0.72, 0), 0.9, 0.97, 0.98), PART.PAINT),
    withPart(cabin, PART.GLASS),
    withPart(box(1.6, 0.05, 1.42, -0.35, 1.53, 0), PART.PAINT),
    ...wheels([1.45, -1.4], 0.34, 0.8),
  ]);
}
