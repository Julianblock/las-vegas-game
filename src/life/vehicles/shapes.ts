import * as THREE from 'three';
import { withPart } from '../../world/geom';

/** Vehicle parts, as the prop shader reads them. */
export const PART = { PAINT: 0, GLASS: 1, RUBBER: 2, ACCENT: 3 } as const;

/** A box sitting on y, centred on x and z. */
export function box(w: number, h: number, d: number, x: number, y: number, z: number) {
  return new THREE.BoxGeometry(w, h, d).translate(x, y + h / 2, z);
}

/** Pairs of wheels at each axle position along x. */
export function wheels(xs: number[], r: number, track: number, width = 0.24) {
  const out: THREE.BufferGeometry[] = [];
  for (const x of xs)
    for (const s of [-1, 1])
      out.push(withPart(new THREE.CylinderGeometry(r, r, width, 12).rotateX(Math.PI / 2).translate(x, r, s * track), PART.RUBBER));
  return out;
}

/** Narrows (and shifts) every vertex above `yAbove`: cabins, hoods, noses. */
export function taper(g: THREE.BufferGeometry, yAbove: number, fx: number, fz: number, shiftX = 0) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    if (p.getY(i) > yAbove) {
      p.setX(i, p.getX(i) * fx + shiftX);
      p.setZ(i, p.getZ(i) * fz);
    }
  }
  g.computeVertexNormals();
  return g;
}
