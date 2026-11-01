import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';

export interface PylonSpec {
  /** Atlas sign for the crown (name panel). */
  crown: string;
  /** Atlas sign for the LED marquee below it (animated). */
  screen?: string;
  /** Total height (m). */
  h: number;
  /** Panel width (m). */
  w: number;
  color: string;
  /** Crown sign height (m). */
  crownH?: number;
}

/**
 * The Strip's roadside marquee: a clad mast carrying a lit name crown over a
 * full-colour LED screen, both faces readable from the boulevard.
 */
export function pylon(k: Kit, fr: Frame, x: number, z: number, s: PylonSpec) {
  const crownH = s.crownH ?? s.w * 0.4;
  const screenH = s.screen ? s.w * 0.55 : 0;
  const mastTop = s.h - crownH - screenH;
  k.box(fr, x, -1, z, s.w * 0.28, mastTop + 1, 2.2, s.color, { rough: 0.5, fx: FX.METAL });
  if (s.screen) {
    k.box(fr, x, mastTop, z, s.w + 1, screenH, 1.8, '#151515', { rough: 0.4 });
    for (const side of [1, -1]) k.sign(fr, s.screen, x, mastTop + screenH / 2, z + side * 0.95, screenH * 0.92, 1.2, FX.NONE, side > 0 ? 0 : Math.PI);
  }
  k.box(fr, x, mastTop + screenH, z, s.w + 1.4, crownH, 2.4, s.color, { rough: 0.45, fx: FX.METAL });
  for (const side of [1, -1]) k.sign(fr, s.crown, x, mastTop + screenH + crownH / 2, z + side * 1.25, crownH * 0.86, 1.3, FX.NEON, side > 0 ? 0 : Math.PI);
  k.light(fr.p(x, s.h, z), 1, 0.9, 0.7, 5);
}
