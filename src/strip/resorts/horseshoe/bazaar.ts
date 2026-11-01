import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

const CANOPY = ['#e84a3a', '#f2b23a', '#3a8ad8', '#2aa86a', '#d84a9a', '#f2f2ea'];

/**
 * Grand Bazaar Shops (2015) on the Flamingo/Strip corner in front of the
 * Horseshoe: a grid of market stalls under coloured canopies, and the
 * Swarovski Starburst, a crystal star high over the corner.
 * Frame on the Strip walk at x = 1576, +x south, +z west to the street.
 */
export function buildBazaar(k: Kit) {
  const fr = k.frame(1576, 225, 270);
  k.reserve(fr, 0, -40, 45, 40);
  let i = 0;
  for (let x = -36; x <= 36; x += 9) {
    for (let z = -12; z >= -70; z -= 10) {
      const c = CANOPY[i++ % CANOPY.length];
      k.box(fr, x, -0.2, z, 6, 3.4, 6, '#d8cbb4', { rough: 0.8 });
      k.storefront(fr, x, z + 3.05, 5, 2.6, 0.7);
      // Pitched canopy over each stall.
      k.geo(fr, new THREE.ConeGeometry(5.6, 2.2, 4).rotateY(Math.PI / 4), x, 3.2, z, c, { rough: 0.6 });
    }
  }
  k.sign(fr, 'bazaarBanner', 0, 7, -6.5, 2.6, 1, FX.NONE);
  for (let x = -30; x <= 30; x += 20) k.gather(fr, x, -40, 10, 14);

  // Swarovski Starburst: a 15 m faceted star on a mast at the corner.
  const sx = -38, sz = -8;
  k.cyl(fr, sx, -0.5, sz, 0.9, 0.6, 26, '#9aa0a8', { rough: 0.4, fx: FX.METAL }, 10);
  for (let p = 0; p < 10; p++) {
    const a = (p / 10) * Math.PI * 2;
    const m = new THREE.Matrix4().makeRotationZ(a).setPosition(sx, 32, sz);
    k.geoM(fr, new THREE.ConeGeometry(1.2, 7.5, 4).translate(0, 3.75, 0), m, '#e8f4ff', { rough: 0.05, glow: 0.9, fx: FX.CHASE });
  }
  k.geo(fr, new THREE.IcosahedronGeometry(2.2), sx, 30, sz, '#f4fbff', { rough: 0.05, glow: 1.2 });
  k.light(fr.p(sx, 32, sz), 0.85, 0.95, 1, 9);
  k.glow(fr, sx, sz, 14, 24, 40, 0.8, 0.9, 1);
}
