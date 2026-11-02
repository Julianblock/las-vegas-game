import type { Frame } from '../../../world/builders';
import type { Kit } from '../../kit';

const STEEL = '#5a4a3a';

/** Rusted steel legs holding a sign `w` wide with its bottom edge at `y`; `yaw` turns its width as in `Kit.sign`. */
export function posts(k: Kit, fr: Frame, x: number, z: number, w: number, y: number, yaw = 0) {
  const ax = Math.cos(yaw), az = -Math.sin(yaw);
  for (const u of [-w * 0.35, w * 0.35]) k.box(fr, x + u * ax, -0.5, z + u * az, 0.3, y + 0.6, 0.3, STEEL, { rough: 0.9 });
}
