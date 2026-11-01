import { FX, type Frame } from '../../world/builders';
import { FLOOR, type Kit } from '../kit';

export interface YSpec {
  /** Wing length from the core (m), width and storeys. */
  wing: number;
  width: number;
  floors: number;
  color: string;
  fx?: number;
  wash?: number;
  /** Storeys the wing tips step down, for the terraced Steve Wynn-era Ys. */
  step?: number;
}

/**
 * A three-winged "Y" hotel tower, the 1990s Strip type (Mirage, TI,
 * Mandalay Bay): wings at 120° round a core. Wing 0 points along local +z.
 * Returns the roof height of the core.
 */
export function yTower(k: Kit, fr: Frame, s: YSpec) {
  const fx = s.fx ?? FX.WINDOWS;
  const step = s.step ?? 0;
  for (let w = 0; w < 3; w++) {
    const yaw = (w * 2 * Math.PI) / 3;
    const segs = step ? 3 : 1;
    for (let i = 0; i < segs; i++) {
      const len = s.wing / segs;
      const mid = s.width * 0.3 + len * (i + 0.5);
      const floors = s.floors - i * step;
      const x = Math.sin(yaw) * mid;
      const z = Math.cos(yaw) * mid;
      k.box(fr, x, -4, z, s.width, floors * FLOOR + 4, len + 0.5, s.color, { rough: 0.6, fx, glow: s.wash ?? 1 }, yaw);
    }
  }
  const top = s.floors * FLOOR;
  k.cyl(fr, 0, -4, 0, s.width * 0.75, s.width * 0.75, top + 6, s.color, { rough: 0.6, fx, glow: s.wash ?? 1 }, 6);
  return top;
}
