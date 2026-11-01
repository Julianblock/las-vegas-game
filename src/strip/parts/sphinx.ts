import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A sphinx couchant facing local +z, `h` tall at the head: lion body on a
 * plinth, paws forward, the striped nemes headdress falling to the
 * shoulders, the false beard.
 */
export function sphinx(k: Kit, fr: Frame, x: number, z: number, h: number, stone = '#d8c090') {
  const L = h * 2.2;
  const m = { rough: 0.85 };
  k.box(fr, x, -0.5, z, h * 0.8, h * 0.12, L * 1.05, '#c8b080', m);
  k.box(fr, x, h * 0.1, z - L * 0.12, h * 0.62, h * 0.38, L * 0.62, stone, m);
  k.geo(fr, new THREE.SphereGeometry(1, 12, 8).scale(h * 0.32, h * 0.22, L * 0.18), x, h * 0.42, z - L * 0.38, stone, m);
  for (const s of [-1, 1]) k.box(fr, x + s * h * 0.18, h * 0.1, z + L * 0.32, h * 0.16, h * 0.14, L * 0.36, stone, m);
  k.box(fr, x, h * 0.3, z + L * 0.12, h * 0.48, h * 0.42, h * 0.3, stone, m);
  k.box(fr, x, h * 0.62, z + L * 0.14, h * 0.4, h * 0.3, h * 0.3, stone, m);
  for (let i = 0; i < 5; i++) {
    const y = h * (0.55 + i * 0.06);
    k.box(fr, x, y, z + L * 0.12, h * (0.56 - i * 0.04), h * 0.03, h * 0.32, i % 2 ? '#2a4a8a' : '#d8b040', m);
  }
  k.box(fr, x, h * 0.75, z + L * 0.13, h * 0.5, h * 0.12, h * 0.3, '#d8b040', m);
  k.box(fr, x, h * 0.42, z + L * 0.2, h * 0.08, h * 0.16, h * 0.08, '#b89860', m);
}
