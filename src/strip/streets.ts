/**
 * Surveyed centrelines of the two boulevards everything here fronts, sampled
 * from the OSM ways (world metres). Resort modules place frontages off these
 * so a sign or palm row lands on the right kerb.
 */

/** Las Vegas Boulevard centre x at a given z (north is -z). */
const STRIP: [number, number][] = [
  [-4000, 3430], [-3000, 2897], [-2000, 2370], [-1500, 2105], [-1000, 1836], [-600, 1628], [-300, 1552],
  [0, 1540], [400, 1536], [1000, 1532], [1700, 1535], [2700, 1540], [3300, 1542],
];

/** Flamingo Road centre z at a given x (the road kinks round Hotel Rio Drive and I-15). */
const FLAMINGO: [number, number][] = [
  [-2400, 113], [-1630, 59], [-845, 54], [-229, 50], [0, 49], [262, 90], [603, 184], [900, 160], [1200, 133], [1540, 146], [2000, 157], [2340, 165], [3200, 188], [4700, 158],
];

function lerp(t: [number, number][], v: number) {
  if (v <= t[0][0]) return t[0][1];
  for (let i = 1; i < t.length; i++) {
    if (v <= t[i][0]) {
      const [a, av] = t[i - 1];
      const [b, bv] = t[i];
      return av + ((v - a) / (b - a)) * (bv - av);
    }
  }
  return t[t.length - 1][1];
}

export const stripX = (z: number) => lerp(STRIP, z);
export const flamingoZ = (x: number) => lerp(FLAMINGO, x);

/** Half-width of the Strip's right-of-way to the back of the sidewalk (m). */
export const STRIP_HALF = 34;
/** Half-width of Flamingo Road's right-of-way east of I-15 (m). */
export const FLAMINGO_HALF = 28;

/** Flamingo Road cross streets, west to east (world x). */
export const CROSS = {
  lindell: -2385,
  decatur: -1627,
  arville: -845,
  wynn: -428,
  hughHefner: -229,
  valleyView: -8,
  hotelRio: 270,
  deanMartin: 603,
  i15: 840,
  sinatra: 940,
  strip: 1541,
  linqLane: 1989,
  koval: 2338,
  hughesParkway: 2787,
  paradise: 3208,
  maryland: 4698,
} as const;

/** True within `gap` metres (world x) of a Flamingo Road cross street. */
export const nearCross = (x: number, gap = 16) => Object.values(CROSS).some((c) => Math.abs(x - c) < gap);
