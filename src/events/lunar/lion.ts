import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

/**
 * A southern lion for two dancers, facing +z, feet at the origin: the big
 * painted head with mirror eyes and a fur fringe held up by the front dancer,
 * a long cloth back over the rear dancer, and both dancers’ trousered legs.
 */
export function lionGeometry(coat: string, trim: string) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const head = new THREE.SphereGeometry(0.55, 16, 12).scale(1, 0.85, 1.05).translate(0, 1.75, 1.0);
  s.add(head, I, coat, { rough: 0.5, glow: 0.2 });
  s.add(new THREE.BoxGeometry(0.9, 0.18, 0.5).translate(0, 1.42, 1.35), I, trim, { rough: 0.5 });
  s.add(new THREE.SphereGeometry(0.16, 12, 10).translate(0, 2.25, 1.15), I, '#e8e8f0', { rough: 0.2, glow: 0.4 });
  for (const sx of [-1, 1]) {
    s.add(new THREE.SphereGeometry(0.13, 10, 8).translate(sx * 0.24, 1.9, 1.48), I, '#ffffff', { rough: 0.3 });
    s.add(new THREE.SphereGeometry(0.07, 8, 6).translate(sx * 0.24, 1.9, 1.59), I, '#101010', { rough: 0.3 });
    s.add(new THREE.ConeGeometry(0.08, 0.3, 6).rotateZ(sx * 0.5).translate(sx * 0.42, 2.2, 0.9), I, trim, { rough: 0.6 });
  }
  s.add(new THREE.TorusGeometry(0.5, 0.08, 6, 20).translate(0, 1.75, 0.95), I, '#ffffff', { rough: 1 });
  const back = new THREE.CylinderGeometry(0.45, 0.4, 2.2, 12, 1, true).rotateX(Math.PI / 2).scale(1, 0.75, 1).translate(0, 1.15, -0.4);
  s.add(back, I, coat, { rough: 0.8 });
  s.add(new THREE.ConeGeometry(0.2, 0.6, 8).rotateX(-Math.PI / 2.4).translate(0, 1.2, -1.6), I, trim, { rough: 0.8 });
  for (const z of [0.85, -1.2]) {
    for (const sx of [-1, 1]) s.add(new THREE.CylinderGeometry(0.1, 0.09, 0.9, 6).translate(sx * 0.16, 0.45, z), I, trim, { rough: 0.8 });
  }
  return s.build();
}
