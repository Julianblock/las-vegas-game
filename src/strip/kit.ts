import * as THREE from 'three';
import { Frame, FX, type Mat, SignBuilder, SolidBuilder, UP } from '../world/builders';
import type { Heightfield } from '../world/heightfield';
import type { SignRect } from '../world/signAtlas';
import { ll } from '../world/geo';
import type { Lot } from '../world/props';
import type { Crowd } from '../life/people';

/** Storey height the facade shader's room grid assumes (m). */
export const FLOOR = 3.1;

/** A reserved rectangle of ground: centre, unit x axis, half extents. */
export interface Rect {
  x: number;
  z: number;
  ux: number;
  uz: number;
  hw: number;
  hd: number;
}

/**
 * Shared toolkit every Strip landmark module builds with: merged solids and
 * atlas signs, night lights, crowd spots, parking lots and reserved sites.
 * Local frames put x along the frontage and +z out toward the street.
 */
export class Kit {
  readonly s = new SolidBuilder();
  readonly sg = new SignBuilder();
  /** Point lights (world xyz, rgb, size, blink) for the night-light renderer. */
  readonly lights: number[] = [];
  /** Lit facades: world x, z, y0, y1, then linear rgb and half-width (mirrored by lakes and pools). */
  readonly glows: number[] = [];
  readonly sites: Rect[] = [];
  readonly lots: Lot[] = [];
  readonly crowd: Crowd = { walks: [], spots: [], day: 0.8, night: 1, cx: 1500, cz: -300, radius: 4200 };
  /** Seed passed to the shader for per-landmark variation. */
  seed = 1;

  constructor(
    readonly hf: Heightfield,
    readonly rects: Record<string, SignRect>,
  ) {}

  /** Ground height at world (x, z). */
  y(x: number, z: number) {
    return this.hf.height(x, z);
  }

  /**
   * Frame at a surveyed lat/lon whose +z faces compass bearing `deg`,
   * reserving `hw` x `hd` metres of lot from OSM filler buildings.
   */
  at(lat: number, lon: number, deg: number, hw = 0, hd = 0): Frame {
    const p = ll(lat, lon);
    return this.frame(p.x, p.z, deg, hw, hd);
  }

  /** Frame at world (x, z) facing compass bearing `deg`. */
  frame(x: number, z: number, deg: number, hw = 0, hd = 0): Frame {
    const a = (deg * Math.PI) / 180;
    const fr = new Frame(x, this.y(x, z), z, Math.sin(a), -Math.cos(a));
    if (hw > 0 && hd > 0) this.sites.push({ x, z, ux: fr.r.x, uz: fr.r.z, hw, hd });
    return fr;
  }

  /** Reserves a local rectangle of a frame. */
  reserve(fr: Frame, x: number, z: number, hw: number, hd: number) {
    const c = fr.p(x, 0, z);
    this.sites.push({ x: c.x, z: c.z, ux: fr.r.x, uz: fr.r.z, hw, hd });
  }

  /** True on ground a hand-built landmark stands on. */
  occupies(x: number, z: number) {
    for (const r of this.sites) {
      const dx = x - r.x;
      const dz = z - r.z;
      if (Math.abs(dx * r.ux + dz * r.uz) < r.hw && Math.abs(-dx * r.uz + dz * r.ux) < r.hd) return true;
    }
    return false;
  }

  box(fr: Frame, x: number, y: number, z: number, w: number, h: number, d: number, color: string, mat: Mat = {}, yaw = 0) {
    const g = new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0);
    this.s.add(g, fr.at(x, y, z, yaw), color, mat, this.seed);
  }

  cyl(fr: Frame, x: number, y: number, z: number, r0: number, r1: number, h: number, color: string, mat: Mat = {}, sides = 12) {
    const g = new THREE.CylinderGeometry(r1, r0, h, sides).translate(0, h / 2, 0);
    this.s.add(g, fr.at(x, y, z), color, mat, this.seed);
  }

  /** Any geometry placed at local (x, y, z), turned `yaw`. */
  geo(fr: Frame, g: THREE.BufferGeometry, x: number, y: number, z: number, color: string, mat: Mat = {}, yaw = 0) {
    this.s.add(g, fr.at(x, y, z, yaw), color, mat, this.seed);
  }

  /** Geometry under an explicit local matrix. */
  geoM(fr: Frame, g: THREE.BufferGeometry, m: THREE.Matrix4, color: string, mat: Mat = {}) {
    this.s.add(g, fr.basis.clone().multiply(m), color, mat, this.seed);
  }

  /** Sign face centred at local (x, y, z), facing local yaw (0 = toward the street). */
  sign(fr: Frame, name: string, x: number, y: number, z: number, h: number, glow = 1, fx: number = FX.NONE, yaw = 0, both = false) {
    const s = this.rects[name];
    if (!s) throw new Error(`No sign "${name}" in the atlas`);
    this.sg.quad(fr.p(x, y, z), fr.dir(yaw), UP, h * s.aspect, h, s, glow, fx, this.seed, both);
  }

  /** Hotel slab: `floors` storeys of rooms over a sunk base. Returns the roof height. */
  slab(fr: Frame, x: number, z: number, w: number, d: number, floors: number, color: string, fx: number = FX.WINDOWS, wash = 0, yaw = 0, base = 0) {
    const h = floors * FLOOR;
    this.box(fr, x, base - 4, z, w, h + 4, d, color, { rough: 0.75, fx, glow: wash }, yaw);
    return base + h;
  }

  /** Thin bar between two local points; glows when `glow` > 0. */
  tube(fr: Frame, a: THREE.Vector3, b: THREE.Vector3, r: number, color: string, glow: number, fx = 0) {
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-4) return;
    const g = new THREE.BoxGeometry(r, len, r).translate(0, len / 2, 0);
    const q = new THREE.Quaternion().setFromUnitVectors(UP, d.normalize());
    const m = new THREE.Matrix4().compose(a, q, new THREE.Vector3(1, 1, 1));
    this.s.add(g, fr.basis.clone().multiply(m), color, { glow, rough: 0.4, fx }, this.seed);
  }

  /** A lit facade `w` wide between local heights y0..y1 that water mirrors at night. */
  glow(fr: Frame, x: number, z: number, w: number, y0: number, y1: number, r: number, g: number, b: number) {
    const a = fr.p(x, y0, z);
    this.glows.push(a.x, a.z, a.y, fr.p(x, y1, z).y, r, g, b, w / 2);
  }

  light(p: THREE.Vector3, r: number, g: number, b: number, size: number, blink = 0) {
    this.lights.push(p.x, p.y, p.z, r, g, b, size, blink);
  }

  /** Red obstruction beacons at both ends of a roof `w` long along local x. */
  beacons(fr: Frame, x: number, z: number, w: number, y: number) {
    for (const u of [-w / 2, w / 2]) this.light(fr.p(x + u, y + 1.5, z), 1, 0.08, 0.04, 3.2, 1);
  }

  /** Lit storefront glazing on a wall at local z. */
  storefront(fr: Frame, cx: number, z: number, w: number, h: number, glow = 0.8) {
    this.box(fr, cx, 0.2, z, w, h, 0.15, '#3a2e22', { rough: 0.15, glow });
  }

  /** Porte-cochère: a lit canopy on columns at local (x, z), with a crowd under it. */
  porte(fr: Frame, x: number, z: number, w: number, d: number, color: string, h = 6) {
    const c = fr.p(x, 0, z);
    this.crowd.spots.push({ x: c.x, z: c.z, r: Math.min(w, d) * 0.35, n: 12 });
    this.reserve(fr, x, z, w / 2 + 4, d / 2 + 4);
    this.box(fr, x, h, z, w, 1.4, d, color, { rough: 0.5 });
    this.box(fr, x, h - 0.05, z, w - 1, 0.05, d - 1, '#fff2d8', { glow: 1.3 });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) this.box(fr, x + sx * (w / 2 - 1), -1, z + sz * (d / 2 - 1), 0.9, h + 1, 0.9, color);
    this.light(fr.p(x, h - 0.4, z), 1, 0.9, 0.75, 4);
  }

  /** People gathering at local (x, z) of a frame. */
  gather(fr: Frame, x: number, z: number, r: number, n: number) {
    const c = fr.p(x, 0, z);
    this.crowd.spots.push({ x: c.x, z: c.z, r, n });
  }

  /** A walking route through local points of a frame. */
  walk(fr: Frame, pts: [number, number][]) {
    const w: number[] = [];
    for (const [x, z] of pts) {
      const p = fr.p(x, 0, z);
      w.push(p.x, p.z);
    }
    this.crowd.walks.push(w);
  }

  /** Surface lot: local centre, stall rows along local x, `w` x `d` metres. */
  lot(fr: Frame, x: number, z: number, w: number, d: number, fill = 0.8) {
    const c = fr.p(x, 0, z);
    this.lots.push({ x: c.x, z: c.z, ang: Math.atan2(fr.r.z, fr.r.x), w, d, fill });
  }
}
