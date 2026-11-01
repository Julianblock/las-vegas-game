import * as THREE from 'three';
import type { Frame } from '../../world/builders';
import type { Kit } from '../kit';

export interface TentSpec {
  /** Radius at the eave (m). */
  r: number;
  /** Eave height (m). */
  wall: number;
  /** Roof rise from eave to king pole (m). */
  rise: number;
  /** Alternating canvas colours. */
  a: string;
  b: string;
  /** Number of stripes (even). */
  n?: number;
  /** Stretches the plan along local x (1 = round). */
  stretch?: number;
}

/**
 * A circus big top: a scalloped striped wall under a striped conical roof,
 * a pennant on the king pole. Returns the pole-top height.
 */
export function bigTop(k: Kit, fr: Frame, x: number, z: number, s: TentSpec) {
  const n = s.n ?? 24;
  const step = (Math.PI * 2) / n;
  const m = { rough: 0.85 };
  const sx = s.stretch ?? 1;
  for (let i = 0; i < n; i++) {
    const color = i % 2 ? s.b : s.a;
    const wall = new THREE.CylinderGeometry(s.r, s.r, s.wall, 2, 1, true, i * step, step);
    wall.scale(sx, 1, 1);
    k.geo(fr, wall, x, s.wall / 2, z, color, m);
    const roof = new THREE.ConeGeometry(s.r * 1.04, s.rise, 2, 1, true, i * step, step);
    roof.scale(sx, 1, 1);
    k.geo(fr, roof, x, s.wall + s.rise / 2, z, color, m);
  }
  const top = s.wall + s.rise;
  k.cyl(fr, x, top - 1, z, 0.25, 0.18, 6, '#e8e0d0', { rough: 0.5 }, 6);
  k.box(fr, x + 1, top + 4.2, z, 2, 1.1, 0.08, s.a, m);
  return top + 5;
}
