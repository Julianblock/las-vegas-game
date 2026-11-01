import type { OsmData } from '../../world/meta';
import { chain } from '../chain';
import { Path } from '../path';

/** The maintenance yard spur east of the Sahara station, which trains never run in service. */
const inYard = (w: number[]) => {
  for (let i = 0; i < w.length; i += 2) if (w[i] > 3380 && w[i + 1] < -2800) return true;
  return false;
};

/**
 * The Las Vegas Monorail (2004) as one closed loop: south on the west track
 * from the Sahara to the MGM Grand, round the turnback, and north again on
 * the east track. Null if the map has no monorail.
 */
export function monorailLoop(osm: OsmData): Path | null {
  const ways = (osm.rails ?? []).filter((r) => r.kind === 'monorail' && !inYard(r.pts)).map((r) => r.pts);
  if (!ways.length) return null;
  const seed = ways.reduce((a, b) => (b.length > a.length ? b : a));
  return new Path(chain(ways, seed));
}
