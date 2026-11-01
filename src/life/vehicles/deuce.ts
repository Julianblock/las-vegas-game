import { merge, withPart } from '../../world/geom';
import { box, PART, wheels } from './shapes';

/** The Deuce: the RTC's double-decker that runs the Strip around the clock. */
export function deuceGeometry() {
  return merge([
    withPart(box(13.4, 1.25, 2.55, 0, 0.35, 0), PART.PAINT),
    withPart(box(13.2, 1.05, 2.57, -0.2, 1.6, 0), PART.GLASS),
    withPart(box(0.08, 1.9, 2.3, 6.7, 0.9, 0), PART.GLASS),
    withPart(box(13.4, 0.35, 2.55, 0, 2.65, 0), PART.PAINT),
    withPart(box(13.2, 1.0, 2.57, 0, 3.0, 0), PART.GLASS),
    withPart(box(13.4, 0.35, 2.55, 0, 4.0, 0), PART.ACCENT),
    ...wheels([4.6, -3.2, -4.4], 0.5, 1.05, 0.3),
  ]);
}
