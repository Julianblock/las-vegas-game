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

/** A pedestrian head on the pole at height y, its orange hand lit toward −z. */
function walkHead(k: Kit, fr: Frame, y: number) {
  k.box(fr, 0, y, -0.32, 0.4, 0.4, 0.3, '#1a1a14', { rough: 0.6 });
  k.box(fr, 0, y + 0.08, -0.48, 0.22, 0.22, 0.02, '#ff7a1a', { glow: 1.1, rough: 0.3 });
}

/** The push-button box for the crosswalk, at hand height. */
function button(k: Kit, fr: Frame) {
  k.box(fr, 0, 1.0, -0.24, 0.12, 0.2, 0.08, '#c8a020', { rough: 0.5 });
}

/**
 * A signal mast on the corner: the pole at the origin, the arm reaching
 * `reach` metres out over the road along local +x (or -x when `dir` is -1),
 * two signal heads facing oncoming traffic (+z), and the cross street's name
 * blade on the arm.
 */
export function mast(k: Kit, fr: Frame, reach: number, name: string, dir = 1) {
  k.cyl(fr, 0, 0, 0, 0.22, 0.16, 7.5, STEEL, { rough: 0.5 });
  walkHead(k, fr, 2.7);
  button(k, fr);
  k.box(fr, (dir * reach) / 2, 6.9, 0, reach, 0.18, 0.18, STEEL, { rough: 0.5 });
  head(k, fr, dir * reach * 0.55, 6.8, 0);
  head(k, fr, dir * reach * 0.85, 6.8, 0);
  k.sign(fr, name, dir * reach * 0.28, 7.35, 0.12, 0.55, 0.5, 0, 0, true);
}
