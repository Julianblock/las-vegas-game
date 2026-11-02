import { FX } from '../../../world/builders';
import type { Frame } from '../../../world/builders';
import type { Kit } from '../../kit';

const FRAME = '#3a4a5a';

/**
 * An RTC bus shelter on the sidewalk, facing the road along local +z: a
 * steel frame, a glass back and ends, a flat roof, a bench, and the route flag.
 */
export function shelter(k: Kit, fr: Frame) {
  for (const x of [-2.3, 2.3]) for (const z of [-0.8, 0.6]) k.box(fr, x, 0, z, 0.1, 2.5, 0.1, FRAME, { rough: 0.4 });
  k.box(fr, 0, 2.5, -0.1, 5.2, 0.12, 1.9, FRAME, { rough: 0.4 });
  k.box(fr, 0, 0.2, -0.8, 4.5, 2.1, 0.04, '#9ac0d0', { rough: 0.1, fx: FX.GLASS });
  for (const x of [-2.3, 2.3]) k.box(fr, x, 0.2, -0.1, 0.04, 2.1, 1.3, '#9ac0d0', { rough: 0.1, fx: FX.GLASS });
  k.box(fr, 0, 0.45, -0.5, 3, 0.06, 0.45, '#8a8a8a', { rough: 0.6 });
  k.sign(fr, 'shelterAd', 0, 1.35, -0.84, 1.7, 0.6, FX.NONE, 0, true);
  k.cyl(fr, 3.2, 0, 0.7, 0.05, 0.05, 3, '#6a6a6a', { rough: 0.5 });
  k.cyl(fr, -3.1, 0, 0.3, 0.3, 0.3, 0.95, '#3a4a3a', { rough: 0.7 }, 10);
  k.cyl(fr, -3.1, 0.95, 0.3, 0.33, 0.2, 0.12, '#2a3a2a', { rough: 0.6 }, 10);
  k.sign(fr, 'rtc202', 3.2, 2.6, 0.7, 0.6, 0.4, FX.NONE, Math.PI / 2, true);
}
