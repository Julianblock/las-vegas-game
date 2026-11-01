import { merge, withPart } from '../../world/geom';
import { box, PART, taper, wheels } from './shapes';

/** Stretch limousine: a sedan cut and lengthened to nine metres, its long side glass blacked out. */
export function limoGeometry() {
  return merge([
    withPart(box(9.0, 0.44, 1.9, 0, 0.3, 0), PART.PAINT),
    withPart(taper(box(8.9, 0.3, 1.88, 0, 0.74, 0), 0.9, 0.99, 0.98), PART.PAINT),
    withPart(taper(box(6.6, 0.5, 1.7, -0.5, 1.04, 0), 1.3, 0.92, 0.92, -0.1), PART.GLASS),
    withPart(box(6.0, 0.05, 1.5, -0.6, 1.53, 0), PART.PAINT),
    withPart(box(9.04, 0.06, 1.94, 0, 0.72, 0), PART.ACCENT),
    ...wheels([3.6, -3.5], 0.36, 0.84),
  ]);
}
