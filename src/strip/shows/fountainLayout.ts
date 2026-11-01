/** Nozzle families of the Bellagio fountains. */
export const JET = { OARSMAN: 0, MINI: 1, SHOOTER: 2, EXTREME: 3 } as const;

export interface Nozzle {
  x: number;
  z: number;
  kind: number;
  /** 0..1 position along its line, for running waves. */
  u: number;
}

/**
 * The lake's nozzle field (world metres). The real lake has ~1,200 nozzles:
 * oscillating "oarsmen" and mini-shooters in lines parallel to the Strip
 * shore, "shooters" in an arc, and a handful of "extreme shooters" that throw
 * water 140 m up. Lines follow the shore from the north lobe to the south.
 */
export function bellagioNozzles(): Nozzle[] {
  const out: Nozzle[] = [];
  const line = (x0: number, z0: number, x1: number, z1: number, step: number, kind: number) => {
    const n = Math.floor(Math.hypot(x1 - x0, z1 - z0) / step);
    for (let i = 0; i <= n; i++) out.push({ x: x0 + ((x1 - x0) * i) / n, z: z0 + ((z1 - z0) * i) / n, kind, u: i / n });
  };
  line(1488, 228, 1488, 482, 2.6, JET.OARSMAN);
  line(1474, 236, 1474, 474, 3.2, JET.MINI);
  line(1460, 244, 1460, 466, 5.5, JET.SHOOTER);
  // Shooter arc cupped toward the tower, like the crescent behind it.
  for (let i = 0; i <= 40; i++) {
    const a = -0.5 + i / 40;
    out.push({ x: 1600 - 200 * Math.cos(a), z: 355 + 200 * Math.sin(a), kind: JET.SHOOTER, u: i / 40 });
  }
  for (const z of [262, 300, 355, 410, 448]) out.push({ x: 1432, z, kind: JET.EXTREME, u: (z - 262) / 186 });
  return out;
}
