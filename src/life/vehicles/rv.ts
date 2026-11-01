import { merge, withPart } from '../../world/geom';
import { box, PART, taper, wheels } from './shapes';

/** Class A motorhome: a tall slab-sided box with a sloped nose. */
export function rvGeometry() {
  return merge([
    withPart(taper(box(10.4, 3.0, 2.5, 0, 0.45, 0), 2.6, 1, 1), PART.PAINT),
    withPart(box(0.1, 1.1, 2.3, 5.2, 1.6, 0), PART.GLASS),
    withPart(box(3.4, 0.5, 1.6, -1.4, 3.45, 0), PART.PAINT),
    withPart(box(9.6, 0.18, 2.52, 0, 1.2, 0), PART.RUBBER),
    ...wheels([3.8, -2.6, -3.6], 0.5, 1.0, 0.3),
  ]);
}
