import type { Kit } from '../../kit';

/** Fremont Street East from the Las Vegas Boulevard corner, heading east-southeast. */
export const FREMONT_EAST = { x: 4446, z: -5905, bearing: 118 };

/** Facades stand this far either side of the centre line (m). */
export const FACADE = 13;

/**
 * A frame on the facade `s` metres down the street, on the south side when
 * `side` is +1 and the north when -1: local +z faces out across the street.
 */
export function facadeFrame(k: Kit, s: number, side: number) {
  const a = (FREMONT_EAST.bearing * Math.PI) / 180;
  const ux = Math.sin(a), uz = -Math.cos(a);
  const x = FREMONT_EAST.x + ux * s - uz * FACADE * side;
  const z = FREMONT_EAST.z + uz * s + ux * FACADE * side;
  return k.frame(x, z, FREMONT_EAST.bearing + (side > 0 ? -90 : 90));
}
