/**
 * Fremont Street's pedestrian mall, the five blocks under the canopy, from
 * 4th Street (east) to Main Street (west), derived from the cross streets.
 * Bearing is the compass direction from Main toward 4th.
 */
export const FREMONT = {
  east: { x: 4337, z: -5961 },
  west: { x: 3932, z: -6176 },
  bearing: 118,
  /** Building face to building face. */
  width: 30,
};

/** Point `t` metres east of Main Street along the mall, `off` metres to its south side. */
export function onFremont(t: number, off = 0) {
  const dx = FREMONT.east.x - FREMONT.west.x, dz = FREMONT.east.z - FREMONT.west.z;
  const len = Math.hypot(dx, dz);
  const ux = dx / len, uz = dz / len;
  return { x: FREMONT.west.x + ux * t - uz * off, z: FREMONT.west.z + uz * t + ux * off, len };
}
