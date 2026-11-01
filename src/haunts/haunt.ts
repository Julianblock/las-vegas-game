import type { GhostGround } from '../life/ghosts';
import type { Discovery } from '../ui/discoveries';

/** A haunting: where the ghosts walk, how many, and the card when you see one. */
export interface Haunt extends Discovery {
  ground: GhostGround;
  count: number;
  hint: string;
  /** Tour camera orbit radius and height above the ground (m). */
  r: number;
  h: number;
}

/** A rectangle of haunted ground from its corners. */
export function rect(x0: number, z0: number, x1: number, z1: number): GhostGround {
  return { poly: [x0, z0, x1, z0, x1, z1, x0, z1, x0, z0], cx: (x0 + x1) / 2, cz: (z0 + z1) / 2 };
}
