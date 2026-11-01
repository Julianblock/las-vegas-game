/**
 * Local tangent-plane coordinates centred on Flamingo Road between Decatur and
 * the Strip, matching scripts/lib/geo.mjs: x metres east, z metres south.
 */
export const CENTER = { lat: 36.116, lon: -115.19 };

const phi = (CENTER.lat * Math.PI) / 180;
const M_PER_DEG_LAT = 111132.92 - 559.82 * Math.cos(2 * phi) + 1.175 * Math.cos(4 * phi);
const M_PER_DEG_LON = 111412.84 * Math.cos(phi) - 93.5 * Math.cos(3 * phi);

/** World x, z of a latitude and longitude. */
export function ll(lat: number, lon: number): { x: number; z: number } {
  return { x: (lon - CENTER.lon) * M_PER_DEG_LON, z: -(lat - CENTER.lat) * M_PER_DEG_LAT };
}

/** Latitude and longitude of a world x, z. */
export function toLatLon(x: number, z: number): { lat: number; lon: number } {
  return { lat: CENTER.lat - z / M_PER_DEG_LAT, lon: CENTER.lon + x / M_PER_DEG_LON };
}

/** Compass bearing (degrees clockwise from north) as a world yaw for Frame directions. */
export function bearing(deg: number): { fx: number; fz: number } {
  const a = (deg * Math.PI) / 180;
  return { fx: Math.sin(a), fz: -Math.cos(a) };
}
