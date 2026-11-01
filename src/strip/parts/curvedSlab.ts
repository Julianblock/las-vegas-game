import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

export interface CurveSpec {
  /** World-space centreline, end to end. */
  line: [number, number][];
  thick: number;
  h: number;
  color: string;
  fx: number;
  wash?: number;
}

/**
 * A slab tower bent along a centreline (the Wynn and Encore crescents):
 * one box per chord, overlapped so the joints close. Returns the frames of
 * the end chords and the facade normal at the middle, for signs.
 */
export function curvedSlab(k: Kit, s: CurveSpec) {
  const frames: Frame[] = [];
  for (let i = 0; i + 1 < s.line.length; i++) {
    const [ax, az] = s.line[i];
    const [bx, bz] = s.line[i + 1];
    const len = Math.hypot(bx - ax, bz - az);
    const deg = (Math.atan2(bz - az, bx - ax) * 180) / Math.PI + 180;
    const fr = k.frame((ax + bx) / 2, (az + bz) / 2, deg, len / 2 + 2, s.thick / 2 + 2);
    k.box(fr, 0, -4, 0, len + s.thick * 0.35, s.h + 4, s.thick, s.color, { rough: 0.25, fx: s.fx, glow: s.wash ?? 1 });
    frames.push(fr);
  }
  return frames;
}
