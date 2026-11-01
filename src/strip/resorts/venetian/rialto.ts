import * as THREE from 'three';
import type { Kit } from '../../kit';

/**
 * The Rialto Bridge: a white stone arch from the Strip walk over the canal,
 * its two rows of shop arches meeting at a central portico.
 * Frame centred on the bridge, +x east along the span.
 */
export function buildRialto(k: Kit) {
  const fr = k.frame(1715, -700, 180);
  const S = '#f2ece0';
  const span = 56;
  // Deck: a shallow arch built from short rising segments.
  const n = 14;
  for (let i = 0; i < n; i++) {
    const t0 = i / n - 0.5;
    const t1 = (i + 1) / n - 0.5;
    const y0 = 7 * (1 - 4 * t0 * t0);
    const y1 = 7 * (1 - 4 * t1 * t1);
    const a = new THREE.Vector3(t0 * span, y0, 0);
    const b = new THREE.Vector3(t1 * span, y1, 0);
    k.tube(fr, a.clone().setZ(-8), b.clone().setZ(-8), 1.2, S, 0);
    k.tube(fr, a.clone().setZ(8), b.clone().setZ(8), 1.2, S, 0);
    k.box(fr, (t0 + t1) * span * 0.5, Math.min(y0, y1) - 1.2, 0, span / n + 0.4, 1.4, 16, S, { rough: 0.8 });
  }
  // Arch ring underneath, and the piers.
  const ring = new THREE.TorusGeometry(span * 0.45, 1.3, 4, 24, Math.PI);
  k.geo(fr, ring, 0, -6, 0, S, { rough: 0.8 });
  for (const s of [-1, 1]) k.box(fr, s * span * 0.47, -1, 0, 6, 3, 18, S, { rough: 0.8 });
  // Shop arcades either side of the central portico.
  for (const s of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const x = s * (6 + i * 4.5);
      const y = 7 * (1 - 4 * (x / span) * (x / span));
      k.box(fr, x, y, 0, 4, 4.5, 14, '#ece4d6', { rough: 0.8 });
      k.box(fr, x, y + 4.5, 0, 4.4, 0.6, 15, '#c8b8a0', { rough: 0.7 });
    }
  }
  k.box(fr, 0, 7, 0, 9, 8, 15, S, { rough: 0.8 });
  k.geo(fr, new THREE.CylinderGeometry(7.5, 7.5, 15, 16, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2), 0, 15, 0, '#c8b8a0', { rough: 0.7 });
  k.gather(fr, 0, 0, 6, 14);
}
