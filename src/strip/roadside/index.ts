import type { Kit } from '../kit';
import type { Resort } from '../resort';
import type { Brand, PoleKind } from './brand';
import { BRANDS } from './brands';
import { arches } from './poles/arches';
import { fuel } from './poles/fuel';
import { monument } from './poles/monument';
import { tallPole } from './poles/tall';
import { fuelPrices } from './prices';
import { RoadIndex } from './roads';

const POLES: Record<PoleKind, (k: Kit, fr: ReturnType<Kit['frame']>, b: Brand) => void> = {
  tall: tallPole,
  monument,
  fuel,
  arches,
};

/** The stretch of valley the roadside signs cover: the Strip, Flamingo to Decatur, Paradise and beyond. */
const BOUNDS = { x0: -2600, x1: 5000, z0: -4000, z1: 4200 };

function brandOf(brand: string, name: string) {
  return BRANDS.find((b) => b.match.test(brand)) ?? BRANDS.find((b) => b.match.test(name));
}

/**
 * Chain pole signs at every free-standing branded POI: each finds its
 * nearest street and stands at the kerb between the street and the
 * building, faces turned to the traffic. POIs inside resorts are skipped.
 */
export const roadside: Resort = {
  id: 'roadside',
  name: 'Roadside chains',
  signs: [...BRANDS.map((b) => b.sign), fuelPrices],
  build(k) {
    if (!k.osm) return;
    const roads = new RoadIndex(k.osm.roads);
    const taken: [number, number][] = [];
    for (const p of k.osm.pois) {
      if (p.x < BOUNDS.x0 || p.x > BOUNDS.x1 || p.z < BOUNDS.z0 || p.z > BOUNDS.z1) continue;
      if (!p.fp && p.kind !== 'fuel') continue;
      const b = brandOf(p.brand, p.name);
      if (!b || k.occupies(p.x, p.z)) continue;
      const hit = roads.nearest(p.x, p.z, 90);
      if (!hit || hit.d < hit.half + 3) continue;
      const ox = (p.x - hit.x) / hit.d;
      const oz = (p.z - hit.z) / hit.d;
      const px = hit.x + ox * (hit.half + 4);
      const pz = hit.z + oz * (hit.half + 4);
      if (taken.some(([tx, tz]) => Math.hypot(tx - px, tz - pz) < 12)) continue;
      taken.push([px, pz]);
      // Faces along the street; local +x points back at the street, so -x is the lot.
      let deg = (Math.atan2(hit.dx, -hit.dz) * 180) / Math.PI;
      const fr0 = k.frame(px, pz, deg);
      if (fr0.r.x * -ox + fr0.r.z * -oz < 0) deg += 180;
      POLES[b.pole](k, k.frame(px, pz, deg), b);
    }
  },
};
