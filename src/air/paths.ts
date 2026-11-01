import type { Heightfield } from '../world/heightfield';
import type { Runway } from './runways';

/** Where an aircraft is and how it sits: position, heading (unit, xz), pitch and roll (radians). */
export interface Pose {
  x: number;
  y: number;
  z: number;
  hx: number;
  hz: number;
  pitch: number;
  roll: number;
  /** Landing lights on (low and slow), 0..1. */
  lamps: number;
}

export function blankPose(): Pose {
  return { x: 0, y: 0, z: 0, hx: 1, hz: 0, pitch: 0, roll: 0, lamps: 0 };
}

const GLIDE = Math.tan((3 * Math.PI) / 180);
const FINAL = 14000;
const VREF = 72;
const ROLLOUT = 2.2;
const TAXI = 12;
const GEAR = 2.6;

function axis(r: Runway) {
  const dx = r.to.x - r.from.x, dz = r.to.z - r.from.z;
  const len = Math.hypot(dx, dz);
  return { ux: dx / len, uz: dz / len, len };
}

/**
 * An arrival `t` seconds after joining a 14 km final: down the three-degree
 * glideslope at about 140 knots, touchdown 350 m past the threshold, then
 * braking to taxi speed. Returns false once it has rolled out.
 */
export function arrival(r: Runway, t: number, hf: Heightfield, out: Pose): boolean {
  const { ux, uz } = axis(r);
  const tdx = r.from.x + ux * 350, tdz = r.from.z + uz * 350;
  const ground = hf.height(tdx, tdz);
  const tTouch = FINAL / VREF;
  let s: number;
  if (t < tTouch) {
    s = -FINAL + VREF * t;
    out.pitch = 0.05;
  } else {
    const tb = Math.min(t - tTouch, (VREF - TAXI) / ROLLOUT);
    s = VREF * tb - 0.5 * ROLLOUT * tb * tb;
    out.pitch = 0;
    if (t - tTouch > (VREF - TAXI) / ROLLOUT) return false;
  }
  out.x = tdx + ux * s;
  out.z = tdz + uz * s;
  out.y = ground + GEAR + Math.max(0, -s) * GLIDE;
  out.hx = ux;
  out.hz = uz;
  out.roll = 0;
  out.lamps = 1;
  return true;
}

const ACCEL = 2.3;
const VR = 80;
const CLIMB = Math.tan((7 * Math.PI) / 180);
const GONE = 26000;

/**
 * A departure `t` seconds after brakes off: the take-off roll, rotation at
 * about 155 knots, then a steady climb straight out. Returns false once it
 * is 26 km away.
 */
export function departure(r: Runway, t: number, hf: Heightfield, out: Pose): boolean {
  const { ux, uz } = axis(r);
  const sx = r.from.x + ux * 150, sz = r.from.z + uz * 150;
  const ground = hf.height(sx, sz);
  const tRot = VR / ACCEL;
  const sRot = 0.5 * ACCEL * tRot * tRot;
  let s: number, h: number;
  if (t < tRot) {
    s = 0.5 * ACCEL * t * t;
    h = 0;
    out.pitch = 0;
  } else {
    // Accelerating at 0.8 m/s² after rotation until 115 m/s, then holding it.
    const ta = t - tRot;
    const tc = (115 - VR) / 0.8;
    const a = Math.min(ta, tc);
    s = sRot + VR * a + 0.4 * a * a + 115 * Math.max(0, ta - tc);
    h = (s - sRot) * CLIMB;
    out.pitch = Math.min(0.21, ta * 0.08);
  }
  if (s > GONE) return false;
  out.x = sx + ux * s;
  out.z = sz + uz * s;
  out.y = ground + GEAR + h;
  out.hx = ux;
  out.hz = uz;
  out.roll = 0;
  out.lamps = h < 900 ? 1 : 0;
  return true;
}
