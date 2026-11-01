import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { POD, STRAT } from './tower';

/**
 * The thrill rides on the pod roof, 270 m up: Big Shot's needle round the
 * mast, X-Scream's see-saw rail tipping over the edge, Insanity's arm
 * slinging riders out over the void, and the SkyJump rig on the north side.
 */
export function buildRides(k: Kit) {
  const fr = k.frame(STRAT.x, STRAT.z, 180);
  const roof = POD.top;
  // Big Shot: a lattice sleeve round the mast with the seat ring.
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    k.tube(fr, new THREE.Vector3(Math.cos(a) * 4.5, roof, Math.sin(a) * 4.5), new THREE.Vector3(Math.cos(a) * 2.6, roof + 48, Math.sin(a) * 2.6), 0.3, '#f2f2f2', 0.2);
  }
  k.cyl(fr, 0, roof + 18, 0, 4.4, 4.4, 1.6, '#e8c018', { rough: 0.5, glow: 0.6 }, 16);
  // X-Scream: a 21 m rail tipped out over the east edge.
  const xs = new THREE.Vector3(14, roof + 6, 0);
  k.tube(fr, new THREE.Vector3(-4, roof + 2, 0), xs.clone().add(new THREE.Vector3(14, -5, 0)), 0.6, '#2a8ad8', 0.3);
  k.box(fr, xs.x + 10, roof + 1.5, 0, 3, 1.6, 2.2, '#e8c018', { rough: 0.5 });
  // Insanity: the arm reaching 20 m out over the west edge.
  k.cyl(fr, -9, roof, 6, 1, 1.4, 8, '#c8202a', { rough: 0.5 }, 10);
  k.tube(fr, new THREE.Vector3(-9, roof + 8, 6), new THREE.Vector3(-30, roof + 12, 8), 0.7, '#c8202a', 0.3);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    k.box(fr, -30 + Math.cos(a) * 3, roof + 8, 8 + Math.sin(a) * 3, 0.9, 1.2, 0.9, '#e8c018', { rough: 0.5, fx: FX.NONE });
  }
  // SkyJump: the north-side jump platform and its guide wires to the pad below.
  k.box(fr, 0, POD.base + 12.5, -23, 6, 0.6, 5, '#7a7a7a', { rough: 0.6, fx: FX.METAL });
  k.tube(fr, new THREE.Vector3(-1, POD.base + 12.5, -25), new THREE.Vector3(-1, 0, -60), 0.04, '#9a9a9a', 0);
  k.tube(fr, new THREE.Vector3(1, POD.base + 12.5, -25), new THREE.Vector3(1, 0, -60), 0.04, '#9a9a9a', 0);
  for (const x of [-30, 34]) k.light(fr.p(x, roof + 6, 0), 1, 0.2, 0.6, 3, 0);
}
