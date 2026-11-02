import * as THREE from 'three';
import type { Frame } from '../../../world/builders';
import type { Kit } from '../../kit';

const STEEL = '#8a8c88';

/** A three-lamp signal head hung at local (x, y, z), lenses toward +z. */
function head(k: Kit, fr: Frame, x: number, y: number, z: number) {
  k.box(fr, x, y - 1.1, z, 0.36, 1.1, 0.3, '#1a1a14', { rough: 0.6 });
  for (const [i, c] of ['#ff2a1a', '#ffb000', '#20e060'].entries()) {
    k.geo(fr, new THREE.CylinderGeometry(0.11, 0.11, 0.06, 10).rotateX(Math.PI / 2), x, y - 0.25 - i * 0.32, z + 0.17, c, { glow: i === 0 ? 1.2 : 0.15, rough: 0.3 });
  }
}

/**
 * A signal mast on the corner: the pole at the origin, the arm reaching
 * `reach` metres out over the road along local +x, two signal heads facing
 * oncoming traffic (+z), and the cross street's name blade on the arm.
 */
export function mast(k: Kit, fr: Frame, reach: number, name: string) {
  k.cyl(fr, 0, 0, 0, 0.22, 0.16, 7.5, STEEL, { rough: 0.5 });
  k.box(fr, reach / 2, 6.9, 0, reach, 0.18, 0.18, STEEL, { rough: 0.5 });
  head(k, fr, reach * 0.55, 6.8, 0);
  head(k, fr, reach * 0.85, 6.8, 0);
  k.sign(fr, name, reach * 0.28, 7.35, 0.12, 0.55, 0.5, 0, 0, true);
}
