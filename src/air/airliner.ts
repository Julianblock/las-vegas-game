import * as THREE from 'three';
import { SolidBuilder } from '../world/builders';
import type { Airline } from './airlines';

/**
 * A narrowbody jet about the size of a 737-800, nose along +x: round
 * fuselage with a painted top, belly and cheatline, swept wings, two
 * engines, a fin and tailplanes, and wingtip navigation lights.
 */
export function airlinerGeometry(a: Airline) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const paint = { rough: 0.35 };
  const len = 38, r = 1.9;
  s.add(new THREE.CylinderGeometry(r, r, len - 8, 16).rotateZ(-Math.PI / 2), I, a.top, paint);
  s.add(new THREE.CylinderGeometry(r * 1.01, r * 1.01, len - 8.2, 16, 1, true, Math.PI * 0.6, Math.PI * 0.8).rotateZ(-Math.PI / 2), I, a.belly, paint);
  s.add(new THREE.BoxGeometry(len - 9, 0.35, r * 2.04).translate(0, -0.2, 0), I, a.stripe, paint);
  s.add(new THREE.SphereGeometry(r, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2).rotateZ(-Math.PI / 2).scale(2.2, 1, 1).translate((len - 8) / 2, 0, 0), I, a.top, paint);
  s.add(new THREE.ConeGeometry(r, 7, 16).rotateZ(Math.PI / 2).translate(-(len - 8) / 2 - 3.5, 0.4, 0), I, a.top, paint);
  s.add(new THREE.BoxGeometry(1.6, 0.35, 2.6).translate((len - 8) / 2 + 1.5, 0.75, 0), I, '#1a1f2a', { rough: 0.2 });
  const wing = new THREE.BufferGeometry();
  const span = 17, root = 7, tip = 1.6, sweep = 6;
  const wv = new Float32Array([
    2, 0, 0, 2 - root, 0, 0, 2 - sweep - tip, 0, span, 2 - sweep, 0, span,
  ]);
  wing.setAttribute('position', new THREE.BufferAttribute(wv, 3));
  wing.setIndex([0, 1, 2, 0, 2, 3]);
  wing.computeVertexNormals();
  for (const side of [1, -1]) {
    const m = new THREE.Matrix4().makeScale(1, 1, side).premultiply(new THREE.Matrix4().makeTranslation(0, -0.9, 0));
    const w = wing.clone().applyMatrix4(m);
    s.add(w, I, '#c8ccd0', { rough: 0.4 });
    const thick = new THREE.BoxGeometry(root * 0.8, 0.35, span * 0.95).translate(-1.7 - sweep / 2, -0.9, side * span * 0.48);
    const tp = thick.attributes.position;
    for (let i = 0; i < tp.count; i++) {
      const z = Math.abs(tp.getZ(i)) / span;
      tp.setX(i, tp.getX(i) * (1 - z * 0.7) - z * sweep * 0.4);
    }
    thick.computeVertexNormals();
    s.add(thick, I, '#c8ccd0', { rough: 0.4 });
    s.add(new THREE.CylinderGeometry(1.0, 0.9, 4, 12).rotateZ(-Math.PI / 2).translate(-0.5, -2.1, side * 5.6), I, a.engine, paint);
    s.add(new THREE.SphereGeometry(0.18, 6, 4).translate(-sweep - 0.8, -0.9, side * span), I, side > 0 ? '#ff2020' : '#20ff40', { rough: 0.5, glow: 3 });
    s.add(new THREE.BoxGeometry(2.6, 0.2, 6.5).translate(-(len - 8) / 2 - 3.6, 0.6, side * 3.2), I, a.tail, paint);
  }
  const fin = new THREE.BoxGeometry(5.5, 6.5, 0.35);
  const fp = fin.attributes.position;
  for (let i = 0; i < fp.count; i++) if (fp.getY(i) > 0) fp.setX(i, fp.getX(i) * 0.55 - 2.2);
  fin.computeVertexNormals();
  s.add(fin.translate(-(len - 8) / 2 - 2.5, 4.6, 0), I, a.tail, paint);
  s.add(new THREE.SphereGeometry(0.16, 6, 4).translate(-(len - 8) / 2 - 7, 0.4, 0), I, '#ffffff', { rough: 0.5, glow: 2 });
  return s.build();
}
