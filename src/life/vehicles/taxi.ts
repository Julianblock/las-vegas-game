import { merge, withPart } from '../../world/geom';
import { carGeometry } from './car';
import { box, PART } from './shapes';

/** A cab: the sedan with an advertising topper on the roof. */
export function taxiGeometry() {
  return merge([
    carGeometry(),
    withPart(box(1.1, 0.34, 0.32, -0.35, 1.58, 0), PART.ACCENT),
    withPart(box(0.4, 0.06, 0.2, -0.35, 1.58, 0), PART.RUBBER),
  ]);
}
