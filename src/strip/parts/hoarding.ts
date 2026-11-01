import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** Construction hoarding: a run of plywood panels with a printed banner every so often. */
export function hoarding(k: Kit, fr: Frame, x0: number, x1: number, z: number, banner?: string, h = 3) {
  const len = Math.abs(x1 - x0);
  k.box(fr, (x0 + x1) / 2, -0.2, z, len, h, 0.3, '#2a2a2a', { rough: 0.8 });
  if (banner) for (let x = Math.min(x0, x1) + 12; x < Math.max(x0, x1) - 6; x += 24) k.sign(fr, banner, x, h / 2, z + 0.2, h * 0.9, 0.6, 0, 0);
}
