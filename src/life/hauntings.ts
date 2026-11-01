import * as THREE from 'three';
import type { Haunt } from '../haunts/haunt';
import type { Heightfield } from '../world/heightfield';
import { Ghosts } from './ghosts';

/** Every haunting on the map, each a little crowd of ghosts on its own ground. */
export class Hauntings {
  readonly group = new THREE.Group();
  private sets: { haunt: Haunt; ghosts: Ghosts }[];
  /** 0..1 how haunted it feels at the camera, from the nearest haunting. */
  presence = 0;
  onSight?: (h: Haunt) => void;

  constructor(haunts: Haunt[], hf: Heightfield) {
    this.sets = haunts.map((haunt) => {
      const ghosts = new Ghosts(haunt.ground, hf, haunt.count);
      ghosts.onSight = () => this.onSight?.(haunt);
      this.group.add(ghosts.group);
      return { haunt, ghosts };
    });
  }

  update(dt: number, cam: THREE.Camera, night: number) {
    this.presence = 0;
    for (const { ghosts } of this.sets) {
      ghosts.update(dt, cam, night);
      this.presence = Math.max(this.presence, ghosts.presence);
    }
  }
}
