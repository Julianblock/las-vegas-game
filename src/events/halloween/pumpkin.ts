import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

const RIND = '#e2701a';
const CANDLE = '#ffb838';

/**
 * A carved jack-o'-lantern, unit size (about 1 m across): a squat ribbed
 * pumpkin, a green stem, and triangle eyes and a toothy grin lit from inside.
 * The face looks along +z.
 */
export function pumpkinGeometry() {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const body = new THREE.SphereGeometry(0.5, 20, 12);
  const p = body.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const a = Math.atan2(z, x);
    // Eight shallow ribs, squashed top and bottom.
    const rib = 1 - 0.07 * Math.pow(Math.abs(Math.cos(a * 4)), 0.6);
    p.setXYZ(i, x * rib, y * 0.72 + 0.36, z * rib);
  }
  body.computeVertexNormals();
  s.add(body, I, RIND, { rough: 0.55 });
  s.add(new THREE.CylinderGeometry(0.04, 0.06, 0.16, 6).rotateZ(0.25).translate(0.02, 0.78, 0), I, '#4a5a22', { rough: 0.8 });
  const lit = { rough: 0.9, glow: 1.4 };
  for (const sx of [-1, 1]) {
    const eye = new THREE.CylinderGeometry(0.09, 0.09, 0.04, 3).rotateX(Math.PI / 2).rotateZ(Math.PI / 2 * sx * 0.2);
    s.add(eye.translate(sx * 0.16, 0.48, 0.45), I, CANDLE, lit);
  }
  s.add(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 3).rotateX(Math.PI / 2).translate(0, 0.36, 0.49), I, CANDLE, lit);
  s.add(new THREE.BoxGeometry(0.42, 0.08, 0.04).translate(0, 0.24, 0.46), I, CANDLE, lit);
  for (const tx of [-0.12, 0.04, 0.16]) s.add(new THREE.BoxGeometry(0.05, 0.05, 0.05).translate(tx, 0.3, 0.465), I, RIND, { rough: 0.55 });
  return s.build();
}
