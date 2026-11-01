import { V } from './types';

export type Zone = 'strip' | 'arterial' | 'freeway' | 'city';

/** Which kind of street an edge is, for its traffic: the Strip, the big arterials, I-15, the rest. */
export function zoneOf(name: string, kind: string, x: number, z: number): Zone {
  if (/Las Vegas Boulevard/.test(name) && x > 1000 && z > -3700 && z < 3900) return 'strip';
  if (kind === 'motorway' || kind === 'trunk') return 'freeway';
  if (/Flamingo|Tropicana|Sahara|Spring Mountain|Paradise|Koval|Harmon|Decatur/.test(name)) return 'arterial';
  return 'city';
}

/** Vehicles per km relative to the road class's base density. */
export const DENSITY: Record<Zone, number> = { strip: 28, arterial: 10, freeway: 1.6, city: 1 };

/** Cruising speed cap (m/s): the Strip crawls, the arterials run at 45 mph. */
export const CAP: Record<Zone, number> = { strip: 9, arterial: 20, freeway: 31, city: 18 };

/** Weighted vehicle mix by zone. */
export const MIX: Record<Zone, [number, number][]> = {
  strip: [[V.CAR, 50], [V.TAXI, 22], [V.LIMO, 7], [V.DEUCE, 4], [V.PICKUP, 12], [V.SEMI, 1], [V.RV, 1]],
  arterial: [[V.CAR, 64], [V.TAXI, 8], [V.LIMO, 1], [V.PICKUP, 22], [V.SEMI, 3], [V.RV, 1]],
  freeway: [[V.CAR, 56], [V.TAXI, 3], [V.PICKUP, 22], [V.SEMI, 15], [V.RV, 4]],
  city: [[V.CAR, 66], [V.PICKUP, 28], [V.TAXI, 2], [V.SEMI, 2], [V.RV, 2]],
};

/** Picks a vehicle type from a zone's mix for a uniform random `r`. */
export function pick(zone: Zone, r: number) {
  const mix = MIX[zone];
  const total = mix.reduce((a, [, w]) => a + w, 0);
  let t = r * total;
  for (const [type, w] of mix) if ((t -= w) <= 0) return type;
  return mix[0][0];
}
