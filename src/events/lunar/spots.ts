import { ARM, POLE_H } from './pole';
import { KERB, roadZ, SPRING_MOUNTAIN } from './route';

export interface PoleSpot {
  x: number;
  z: number;
  /** +1 on the south kerb (arm reaching north), -1 on the north kerb. */
  side: number;
}

const STEP = 26;

/** Poles down both kerbs of Spring Mountain, staggered so the arms alternate. */
export function poleSpots(): PoleSpot[] {
  const out: PoleSpot[] = [];
  const x0 = SPRING_MOUNTAIN[0][0], x1 = SPRING_MOUNTAIN[SPRING_MOUNTAIN.length - 1][0];
  for (let x = x0; x <= x1; x += STEP) {
    for (const side of [-1, 1]) {
      const px = x + (side > 0 ? STEP / 2 : 0);
      out.push({ x: px, z: roadZ(px) + side * KERB, side });
    }
  }
  return out;
}

/** Where a pole's three lanterns hang: along the arm, cord tops just under it. */
export function lanternSpots(p: PoleSpot): [number, number, number][] {
  return [0.9, 1.9, 2.8].map((u) => [p.x, POLE_H - 0.25, p.z - p.side * u * (ARM / 3)]);
}
