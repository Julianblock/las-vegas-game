import { HELIPORT } from './runways';

/**
 * The night-flight loop the Strip tour operators fly: lift off south of
 * Mandalay Bay, run north up the east side of the Strip, circle the Strat,
 * and come home down the west side over I-15.
 */
const WAYPOINTS: [number, number][] = [
  [HELIPORT.x, HELIPORT.z],
  [2500, 2600],
  [2750, 1400],
  [2800, 0],
  [2950, -1500],
  [3250, -2800],
  [3300, -3600],
  [3000, -3850],
  [2700, -3600],
  [2350, -2600],
  [1850, -1200],
  [1750, 300],
  [1800, 1800],
  [1950, 2700],
];

const CUM: number[] = [0];
for (let i = 1; i <= WAYPOINTS.length; i++) {
  const [ax, az] = WAYPOINTS[i - 1];
  const [bx, bz] = WAYPOINTS[i % WAYPOINTS.length];
  CUM.push(CUM[i - 1] + Math.hypot(bx - ax, bz - az));
}

/** Length of one lap in metres. */
export const TOUR_LENGTH = CUM[CUM.length - 1];

/** Point and heading at distance s around the loop (wraps). */
export function tourAt(s: number, out: { x: number; z: number; hx: number; hz: number }) {
  s = ((s % TOUR_LENGTH) + TOUR_LENGTH) % TOUR_LENGTH;
  let i = 1;
  while (CUM[i] < s) i++;
  const [ax, az] = WAYPOINTS[i - 1];
  const [bx, bz] = WAYPOINTS[i % WAYPOINTS.length];
  const len = CUM[i] - CUM[i - 1];
  const f = (s - CUM[i - 1]) / len;
  out.x = ax + (bx - ax) * f;
  out.z = az + (bz - az) * f;
  out.hx = (bx - ax) / len;
  out.hz = (bz - az) / len;
  return out;
}
