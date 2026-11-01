import { merge, withPart } from '../../world/geom';
import { box, PART, wheels } from './shapes';

/** Tractor-trailer: cab-over-engine tractor and a 53-foot box. */
export function semiGeometry() {
  return merge([
    withPart(box(2.4, 1.3, 2.45, 9.4, 0.85, 0), PART.PAINT),
    withPart(box(2.6, 1.7, 2.45, 7.6, 1.2, 0), PART.PAINT),
    withPart(box(0.12, 0.9, 2.2, 8.95, 2.0, 0), PART.GLASS),
    withPart(box(1.8, 0.6, 2.4, 7.4, 2.9, 0), PART.PAINT),
    withPart(box(15.6, 2.75, 2.58, -1.6, 1.25, 0), PART.PAINT),
    withPart(box(3.6, 0.35, 1.2, 6.2, 0.75, 0), PART.RUBBER),
    ...wheels([9.6, 6.9, 5.6], 0.52, 1.0, 0.32),
    ...wheels([-7.0, -8.3], 0.52, 1.0, 0.5),
  ]);
}
