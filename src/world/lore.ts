import type * as THREE from 'three';
import { SPOTS } from '../lore';
import type { Spot } from '../lore/spot';
import type { Discoveries, Discovery } from '../ui/discoveries';
import type { Heightfield } from './heightfield';
import type { WaterKind } from './water';

export interface LoreState {
  pos: THREE.Vector3;
  driving: boolean;
  /** Camera under a pool or the lake. */
  underwater: boolean;
  /** Car cab below the surface. */
  truckUnder: boolean;
  water: { name: string; kind: WaterKind } | null;
  /** Height of the actor above the water or ground. */
  agl: number;
  night: number;
  snowCover: number;
}

/** An egg on the learn-mode map: where it is, how to find it, and how the tour frames it. */
export interface Egg extends Discovery {
  x: number;
  z: number;
  hint: string;
  /** Tour camera orbit radius and height above the ground (m). */
  r: number;
  h: number;
  night?: boolean;
}

/**
 * The stories of Flamingo Road and the Strip, one module per place under
 * src/lore/spots. Each tells its piece of history the first time you find it.
 */
export class Lore {
  private spots: Spot[] = SPOTS;
  readonly ids: string[];

  constructor(
    private hf: Heightfield,
    private journal: Discoveries,
  ) {
    this.ids = this.spots.map((s) => s.id);
  }

  /** Every lore spot and secret with its map position and finding hint. */
  atlas(): Egg[] {
    return this.spots.map(({ test: _t, at, ...d }) => ({ ...d, x: at.x, z: at.z }));
  }

  update(s: LoreState) {
    for (const spot of this.spots) {
      if (this.journal.has(spot.id) || !spot.test(s, this.hf)) continue;
      const { test: _t, at: _a, hint: _h, r: _r, h: _hh, night: _n, ...d } = spot;
      this.journal.discover(d);
    }
  }
}
