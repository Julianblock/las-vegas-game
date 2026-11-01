import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A standing dromedary of the kind that flanked the Sahara's 1952 entrance:
 * barrel body, one hump, long neck, folded head. Faces local +x; `h` is the
 * hump height.
 */
export function camel(k: Kit, fr: Frame, x: number, y: number, z: number, h: number, color = '#c89a5a', yaw = 0) {
  const s = h / 2.1;
  const m = { rough: 0.8 };
  const c = Math.cos(yaw);
  const n = Math.sin(yaw);
  const at = (u: number, w: number): [number, number] => [x + u * c - w * n, z + u * n + w * c];
  for (const [u, w] of [[0.55, 0.25], [0.55, -0.25], [-0.55, 0.25], [-0.55, -0.25]]) {
    const [px, pz] = at(u * s, w * s);
    k.cyl(fr, px, y, pz, 0.09 * s, 0.07 * s, 1.15 * s, color, m, 5);
  }
  const [bx, bz] = at(0, 0);
  k.box(fr, bx, y + 1.1 * s, bz, 1.6 * s, 0.6 * s, 0.62 * s, color, m, yaw);
  k.cyl(fr, bx, y + 1.65 * s, bz, 0.42 * s, 0.1 * s, 0.45 * s, color, m, 7);
  const [nx, nz] = at(0.95 * s, 0);
  k.box(fr, nx, y + 1.35 * s, nz, 0.22 * s, 0.85 * s, 0.22 * s, color, m, yaw);
  const [hx, hz] = at(1.12 * s, 0);
  k.box(fr, hx, y + 2.05 * s, hz, 0.5 * s, 0.2 * s, 0.2 * s, color, m, yaw);
}
