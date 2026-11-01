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

interface Lot {
  x: number;
  z: number;
  ang: number;
  w: number;
  d: number;
}

/**
 * Mapped casino sites along the mall often run out to the middle of the
 * street. Trims a lot on either side so its street face stops at the
 * building line, leaving the mall open under the canopy.
 */
export function clearOfMall<T extends Lot>(lot: T, margin = 1): T {
  const { len } = onFremont(0);
  const ux = (FREMONT.east.x - FREMONT.west.x) / len, uz = (FREMONT.east.z - FREMONT.west.z) / len;
  const nx = -uz, nz = ux;
  const rx = lot.x - FREMONT.west.x, rz = lot.z - FREMONT.west.z;
  const along = rx * ux + rz * uz;
  if (along < 0 || along > len) return lot;
  const off = rx * nx + rz * nz;
  const perpW = Math.abs(Math.cos(lot.ang) * nx + Math.sin(lot.ang) * nz) > 0.7;
  const near = Math.abs(off) - (perpW ? lot.w : lot.d) / 2;
  const limit = FREMONT.width / 2 + margin;
  if (near >= limit) return lot;
  const cut = limit - near;
  const s = Math.sign(off);
  const out = { ...lot, x: lot.x + nx * s * cut / 2, z: lot.z + nz * s * cut / 2 };
  if (perpW) out.w -= cut;
  else out.d -= cut;
  return out;
}
