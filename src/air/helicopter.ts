import * as THREE from 'three';
import { SolidBuilder } from '../world/builders';

/**
 * A tour helicopter in the EC130 mould, nose along +x: rounded cabin with a
 * wide wraparound windscreen, tail boom, enclosed fenestron, skids, and the
 * red beacon on the roof. The rotor is built separately so it can spin.
 */
export function helicopterGeometry(paint: string, trim: string) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const p = { rough: 0.3 };
  s.add(new THREE.SphereGeometry(1.4, 16, 10).scale(2.1, 1, 1), I, paint, p);
  s.add(new THREE.SphereGeometry(1.42, 16, 8, -Math.PI * 0.45, Math.PI * 0.9, Math.PI * 0.2, Math.PI * 0.45).scale(2.1, 1, 1).rotateY(Math.PI / 2), I, '#16202c', { rough: 0.1 });
  s.add(new THREE.BoxGeometry(3.2, 0.25, 2.9).translate(-0.2, -0.3, 0), I, trim, p);
  s.add(new THREE.CylinderGeometry(0.3, 0.55, 5.5, 10).rotateZ(Math.PI / 2).translate(-5.2, 0.35, 0), I, paint, p);
  s.add(new THREE.CylinderGeometry(0.9, 0.9, 0.5, 16).rotateX(Math.PI / 2).translate(-8, 0.6, 0), I, trim, p);
  s.add(new THREE.BoxGeometry(1.2, 1.6, 0.15).translate(-8.3, 1.6, 0), I, paint, p);
  s.add(new THREE.BoxGeometry(1.5, 0.6, 1.4).translate(-0.4, 1.4, 0), I, paint, p);
  s.add(new THREE.CylinderGeometry(0.15, 0.15, 0.6, 6).translate(-0.2, 1.95, 0), I, '#333', p);
  for (const side of [1, -1]) {
    s.add(new THREE.CylinderGeometry(0.07, 0.07, 4.2, 6).rotateZ(Math.PI / 2).translate(0, -1.75, side * 1.1), I, '#2a2a2a', p);
    for (const x of [-1, 1]) s.add(new THREE.CylinderGeometry(0.05, 0.05, 0.6, 6).translate(x, -1.45, side * 1.05), I, '#2a2a2a', p);
  }
  s.add(new THREE.SphereGeometry(0.14, 6, 4).translate(-1.4, 1.75, 0), I, '#ff2020', { rough: 0.5, glow: 3 });
  return s.build();
}

/** Three blades on a hub, centred on the mast head. */
export function rotorGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    s.add(new THREE.BoxGeometry(5.3, 0.06, 0.32).translate(2.75, 0, 0).rotateY(a), I, '#1c1c1c', { rough: 0.5 });
  }
  s.add(new THREE.CylinderGeometry(0.25, 0.25, 0.2, 10), I, '#444', { rough: 0.4 });
  return s.build();
}
