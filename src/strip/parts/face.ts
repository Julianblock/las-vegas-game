import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A frame on the midpoint of an outline edge a→b, its +z pointing away from
 * the building centre (cx, cz) and pushed `out` metres off the wall.
 */
export function faceFrame(k: Kit, ax: number, az: number, bx: number, bz: number, cx: number, cz: number, out = 0): { fr: Frame; len: number } {
  const dx = bx - ax, dz = bz - az;
  const len = Math.hypot(dx, dz);
  let nx = dz / len, nz = -dx / len;
  const mx = (ax + bx) / 2, mz = (az + bz) / 2;
  if (nx * (mx - cx) + nz * (mz - cz) < 0) (nx = -nx), (nz = -nz);
  const deg = (Math.atan2(nx, -nz) * 180) / Math.PI;
  return { fr: k.frame(mx + nx * out, mz + nz * out, deg), len };
}
