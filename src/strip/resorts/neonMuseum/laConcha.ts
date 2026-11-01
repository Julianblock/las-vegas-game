import * as THREE from 'three';
import type { Kit } from '../../kit';

/**
 * The La Concha Motel lobby (1961), Paul Revere Williams's three swooping
 * concrete shells, cut free and trucked up the Boulevard in 2006 to become
 * the Neon Museum's visitor centre.
 */
export function buildLaConcha(k: Kit) {
  const fr = k.frame(4925.5, -6764.4, 115, 15, 10);
  const white = '#f2efe6';
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
    const shell = new THREE.SphereGeometry(1, 20, 10, 0, Math.PI, 0, Math.PI / 2).scale(7.5, 8.5, 5.5).rotateY(-a);
    k.geo(fr, shell, Math.cos(a) * 5, 0, Math.sin(a) * 5, white, { rough: 0.6 });
  }
  k.cyl(fr, 0, 0, 0, 6.5, 6.5, 4.2, '#7aa0b0', { rough: 0.1, glow: 0.5 }, 18);
  k.box(fr, 0, -0.3, 0, 24, 0.35, 18, '#d8d0c0', { rough: 0.8 });
  k.light(fr.p(0, 3.8, 0), 1, 0.85, 0.6, 5);
}
