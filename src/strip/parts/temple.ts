import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A classical portico: a stepped stylobate, a row of columns and an
 * entablature with a pediment. Local x is the colonnade, the front at +z.
 */
export function portico(k: Kit, fr: Frame, x: number, z: number, w: number, h: number, cols: number, color = '#ece4d2') {
  const d = h * 0.45;
  for (let s = 0; s < 3; s++) k.box(fr, x, -0.4 + s * 0.35, z, w + 2.4 - s * 0.8, 0.4, d + 2.4 - s * 0.8, color, { rough: 0.8 });
  const r = Math.min(0.9, w / cols / 5);
  for (let i = 0; i < cols; i++) {
    const cx = x - w / 2 + r * 1.5 + (i * (w - r * 3)) / (cols - 1);
    for (const cz of [z + d / 2 - r, z - d / 2 + r]) k.cyl(fr, cx, 0.6, cz, r, r * 0.85, h - 0.6, color, { rough: 0.6 }, 12);
  }
  k.box(fr, x, h, z, w + 0.6, h * 0.14, d + 0.6, color, { rough: 0.7 });
  // Pediment: a low gable over the entablature.
  k.box(fr, x, h * 1.14, z, w * 0.98, h * 0.05, d, color, { rough: 0.7 });
  k.box(fr, x, h * 1.19, z, w * 0.7, h * 0.05, d * 0.9, color, { rough: 0.7 });
  k.box(fr, x, h * 1.24, z, w * 0.4, h * 0.05, d * 0.8, color, { rough: 0.7 });
}
