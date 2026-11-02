import type { Frame } from '../../../world/builders';
import type { Kit } from '../../kit';

const YELLOW = '#e0b020';

/** A squat yellow fire hydrant: barrel, bonnet, cap and two side outlets. */
export function hydrant(k: Kit, fr: Frame, x: number, z: number) {
  k.cyl(fr, x, 0, z, 0.2, 0.2, 0.08, YELLOW, { rough: 0.6 }, 8);
  k.cyl(fr, x, 0.08, z, 0.14, 0.13, 0.55, YELLOW, { rough: 0.6 }, 8);
  k.cyl(fr, x, 0.63, z, 0.16, 0.06, 0.14, YELLOW, { rough: 0.6 }, 8);
  k.box(fr, x, 0.36, z, 0.42, 0.1, 0.1, YELLOW, { rough: 0.6 });
  k.box(fr, x, 0.32, z + 0.12, 0.14, 0.14, 0.14, '#c8c8c8', { rough: 0.4 });
}
