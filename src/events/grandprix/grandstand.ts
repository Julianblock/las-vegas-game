import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

const STEEL = '#3a3d42';
const SHIRTS = ['#e8e8e8', '#202020', '#ff7a00', '#d4061b', '#1d2a59', '#00594f', '#9aa3ad', '#f2c400', '#5b2a86', '#0b62d6'];

/** Tier depth and rise for the stepped seating. */
const TREAD = 0.85;
const RISE = 0.45;

function rand(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

/**
 * A temporary grandstand, `len` metres long with `rows` tiers climbing away
 * from the track: steel risers, seats packed with fans in team colours, a
 * canopy over the back half, and a scaffold back wall. Runs along x; the
 * front row sits at z = 0 and the stand climbs toward −z.
 */
export function grandstandGeometry(len: number, rows: number, seed: number) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  const r = rand(seed);
  const depth = rows * TREAD;
  const top = rows * RISE + 1.2;
  for (let i = 0; i < rows; i++) {
    const y = 1.2 + i * RISE, z = -i * TREAD;
    s.add(new THREE.BoxGeometry(len, 0.12, TREAD).translate(0, y, z - TREAD / 2), I, '#5d636b', { rough: 0.8 });
    for (let x = -len / 2 + 0.3; x < len / 2; x += 0.55) {
      if (r() < 0.12) continue;
      const shirt = SHIRTS[Math.floor(r() * SHIRTS.length)];
      s.add(new THREE.BoxGeometry(0.42, 0.62, 0.3).translate(x + (r() - 0.5) * 0.1, y + 0.4, z - 0.45), I, shirt, { rough: 0.9 });
    }
  }
  s.add(new THREE.BoxGeometry(len, top, 0.15).translate(0, top / 2, -depth), I, STEEL, { rough: 0.7 });
  for (let x = -len / 2; x <= len / 2 + 0.01; x += 6) {
    s.add(new THREE.BoxGeometry(0.2, top + 3, 0.2).translate(x, (top + 3) / 2, -depth), I, STEEL, { rough: 0.6 });
    s.add(new THREE.BoxGeometry(0.15, 0.15, depth * 0.6).translate(x, top + 3, -depth * 0.7), I, STEEL, { rough: 0.6 });
  }
  s.add(new THREE.BoxGeometry(len + 1, 0.15, depth * 0.6).translate(0, top + 3.1, -depth * 0.7), I, '#f2f2f2', { rough: 0.6 });
  s.add(new THREE.BoxGeometry(len, 1.2, 0.1).translate(0, 0.6, 0.05), I, '#111316', { rough: 0.6 });
  return s.build();
}
