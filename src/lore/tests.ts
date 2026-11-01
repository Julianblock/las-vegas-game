import type { Test } from './spot';

type P = { x: number; z: number };

const dist = (s: { pos: { x: number; z: number } }, p: P) => Math.hypot(s.pos.x - p.x, s.pos.z - p.z);

/** Within `r` of the spot and no higher than `agl` above the ground. */
export const near = (p: P, r: number, agl = 60): Test => (s) => dist(s, p) < r && s.agl < agl;

/** As `near`, but only after dark. */
export const nightNear = (p: P, r: number, agl = 60): Test => (s, hf) => s.night > 0.5 && near(p, r, agl)(s, hf);

/** Flying (not driving) within `r` of the spot between two absolute heights above its ground. */
export const aloft = (p: P, r: number, lo: number, hi: number): Test => (s, hf) => {
  if (s.driving || dist(s, p) > r) return false;
  const y = s.pos.y - hf.height(p.x, p.z);
  return y > lo && y < hi;
};

/** Driving within `r` of the spot. */
export const drive = (p: P, r: number): Test => (s) => s.driving && dist(s, p) < r;

/** Inside an axis-aligned box of world x and z. */
export const within = (x0: number, z0: number, x1: number, z1: number, agl = 120): Test => (s) =>
  s.pos.x > x0 && s.pos.x < x1 && s.pos.z > z0 && s.pos.z < z1 && s.agl < agl;

/** World position of a latitude and longitude (the map's projection). */
export const ll = (lat: number, lon: number): P => ({ x: (lon + 115.19) * 89915, z: (36.116 - lat) * 111320 });
