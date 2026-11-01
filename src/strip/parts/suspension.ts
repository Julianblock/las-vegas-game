import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

/**
 * A suspension footbridge along local x from x0 to x1: Gothic-arched stone
 * towers at the quarter points, main cables drooping between them, vertical
 * suspenders to the deck.
 */
export function suspension(k: Kit, fr: Frame, x0: number, x1: number, deck: number, towerH: number, w = 6, stone = '#b0a088') {
  const len = x1 - x0;
  k.box(fr, (x0 + x1) / 2, deck - 0.6, 0, len, 0.8, w, '#7a6a5a', { rough: 0.8 });
  const towers = [x0 + len * 0.25, x0 + len * 0.75];
  for (const tx of towers) {
    for (const s of [-1, 1]) k.box(fr, tx, -0.5, s * (w / 2 + 0.6), 2.4, towerH + 0.5, 1.6, stone, { rough: 0.8 });
    k.box(fr, tx, towerH - 2, 0, 2.4, 2.6, w + 2.8, stone, { rough: 0.8 });
    k.box(fr, tx, deck + 2.5, 0, 2.4, 1.2, w + 2.8, stone, { rough: 0.8 });
  }
  for (const s of [-1, 1]) {
    const zc = s * (w / 2 + 0.6);
    const pts: THREE.Vector3[] = [];
    const anchors = [x0, towers[0], towers[1], x1];
    for (let span = 0; span < 3; span++) {
      const a = anchors[span];
      const b = anchors[span + 1];
      const ya = span === 0 ? deck + 0.5 : towerH;
      const yb = span === 2 ? deck + 0.5 : towerH;
      for (let i = 0; i <= 8; i++) {
        const t = i / 8;
        const sag = span === 1 ? Math.sin(Math.PI * t) * (towerH - deck - 1.5) : Math.sin(Math.PI * t) * 1.5;
        pts.push(new THREE.Vector3(a + (b - a) * t, ya + (yb - ya) * t - sag, zc));
      }
    }
    for (let i = 0; i + 1 < pts.length; i++) {
      if (pts[i].distanceTo(pts[i + 1]) < 0.01) continue;
      k.tube(fr, pts[i], pts[i + 1], 0.18, '#3a3a3a', 0);
      if (i % 2 === 0 && pts[i].y > deck + 1) k.tube(fr, pts[i], new THREE.Vector3(pts[i].x, deck, zc), 0.04, '#3a3a3a', 0);
    }
  }
}
