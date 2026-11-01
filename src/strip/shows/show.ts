import type * as THREE from 'three';

/** A timed spectacle on the corridor: fountains, a volcano, a beam, a screen. */
export interface Show {
  readonly object: THREE.Object3D;
  /** `clock` is the world clock in seconds; `night` 0 day .. 1 full night. */
  update(dt: number, clock: number, night: number): void;
}
