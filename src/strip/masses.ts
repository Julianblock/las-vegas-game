import * as THREE from 'three';
import { G } from '../render/globals';
import { landmarkFragment, landmarkVertex } from '../render/shaders/landmarkShader';
import type { ShadowMap } from '../render/shadows';
import { SolidBuilder } from '../world/builders';
import type { Heightfield } from '../world/heightfield';
import type { OsmMass } from '../world/meta';
import { styleFor } from './massStyles';

/** Centroid of a flat ring. */
export function centroid(pts: number[]): [number, number] {
  let x = 0;
  let z = 0;
  const n = pts.length / 2;
  for (let i = 0; i < pts.length; i += 2) {
    x += pts[i];
    z += pts[i + 1];
  }
  return [x / n, z / n];
}

/** Signed shoelace area: positive when the ring winds clockwise seen from above (x east, z south). */
function signedArea(pts: number[]) {
  let a = 0;
  for (let i = 0, n = pts.length; i < n; i += 2) {
    const j = (i + 2) % n;
    a += pts[i] * pts[j + 1] - pts[j] * pts[i + 1];
  }
  return a / 2;
}

/**
 * Every tall or large building along the corridor, extruded from its real
 * OpenStreetMap outline to its tagged height: hotel towers with lit rooms,
 * glass curtain walls, parking garages and the low casino boxes between them.
 * Hand-built landmarks claim their own outlines through `skip`.
 */
export class Masses {
  readonly group = new THREE.Group();
  readonly lights: number[] = [];
  readonly glows: number[] = [];
  private geo: THREE.BufferGeometry;
  private shadowMat: THREE.ShaderMaterial;
  /** Footprints kept, for the minimap and for keeping props off them. */
  readonly kept: OsmMass[] = [];

  constructor(masses: OsmMass[], private hf: Heightfield, skip: (m: OsmMass, x: number, z: number) => boolean) {
    const s = new SolidBuilder();
    for (const m of masses) {
      const [cx, cz] = centroid(m.pts);
      if (skip(m, cx, cz)) continue;
      this.kept.push(m);
      this.extrude(s, m, cx, cz);
    }
    const mat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: landmarkVertex,
      fragmentShader: landmarkFragment,
      uniforms: { ...G },
      side: THREE.DoubleSide,
    });
    this.shadowMat = mat.clone();
    this.shadowMat.uniforms = mat.uniforms;
    this.shadowMat.defines = { SHADOW_PASS: '' };
    this.geo = s.build();
    const mesh = new THREE.Mesh(this.geo, mat);
    mesh.name = 'masses';
    this.group.add(mesh);
  }

  addShadowCasters(shadow: ShadowMap) {
    shadow.addCaster(this.geo, this.shadowMat);
  }

  /** True inside any kept outline. */
  covers(x: number, z: number) {
    for (const m of this.kept) {
      const p = m.pts;
      let inside = false;
      for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
        if (p[i + 1] > z !== p[j + 1] > z && x < ((p[j] - p[i]) * (z - p[i + 1])) / (p[j + 1] - p[i + 1]) + p[i]) inside = !inside;
      }
      if (inside) return true;
    }
    return false;
  }

  private extrude(s: SolidBuilder, m: OsmMass, cx: number, cz: number) {
    const st = styleFor(m);
    const pts = m.pts;
    const n = pts.length / 2;
    let ground = Infinity;
    for (let i = 0; i < pts.length; i += 2) ground = Math.min(ground, this.hf.height(pts[i], pts[i + 1]));
    const top = this.hf.height(cx, cz) + m.h;
    const y0 = m.min > 0 ? this.hf.height(cx, cz) + m.min : ground - 1.5;
    if (top - y0 < 1) return;
    const cw = signedArea(pts) > 0;
    const pos: number[] = [];
    const nrm: number[] = [];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const ax = pts[i * 2], az = pts[i * 2 + 1];
      const bx = pts[j * 2], bz = pts[j * 2 + 1];
      const ex = bx - ax, ez = bz - az;
      const l = Math.hypot(ex, ez);
      if (l < 0.05) continue;
      // Outward normal: right of the edge for clockwise rings.
      const nx = (cw ? -ez : ez) / l;
      const nz = (cw ? ex : -ex) / l;
      pos.push(ax, y0, az, bx, y0, bz, bx, top, bz, ax, y0, az, bx, top, bz, ax, top, az);
      for (let k = 0; k < 6; k++) nrm.push(nx, 0, nz);
    }
    const contour = [];
    for (let i = 0; i < n; i++) contour.push(new THREE.Vector2(pts[i * 2], pts[i * 2 + 1]));
    for (const [a, b, c] of THREE.ShapeUtils.triangulateShape(contour, [])) {
      for (const k of [a, b, c]) {
        pos.push(contour[k].x, top, contour[k].y);
        nrm.push(0, 1, 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    s.add(g, new THREE.Matrix4(), st.color, { rough: st.rough, fx: st.fx, glow: st.wash }, st.seed);
    if (m.h > 60) this.lights.push(cx, top + 2, cz, 1, 0.08, 0.04, 3.2, 1);
    if (st.wash > 0 && m.h > 30) {
      const r = Math.sqrt(Math.abs(signedArea(pts)) / Math.PI);
      this.glows.push(cx, cz, ground, top, st.glowRgb[0], st.glowRgb[1], st.glowRgb[2], r);
    }
  }
}
