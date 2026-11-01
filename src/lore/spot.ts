import type { Discovery } from '../ui/discoveries';
import type { Heightfield } from '../world/heightfield';
import type { LoreState } from '../world/lore';

export type Test = (s: LoreState, hf: Heightfield) => boolean;

/**
 * One story on the map: what it says when found, where it is, how to find
 * it, and how the learn-mode tour frames it.
 */
export interface Spot extends Discovery {
  at: { x: number; z: number };
  hint: string;
  /** Tour camera orbit radius and height above the ground (m). */
  r: number;
  h: number;
  night?: boolean;
  test: Test;
}
