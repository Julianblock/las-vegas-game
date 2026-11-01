import { DISTRICTS, RESORT_AREAS, type Area } from '../places/areas';
import { POI_KIND } from '../places/kinds';
import { NAMED_ROADS, ROAD_LABEL } from '../places/roads';
import type { OsmData, OsmPoi } from './meta';

export interface PlaceInfo {
  title: string;
  subtitle: string;
}

/** The Strip at Flamingo Road, the corridor's centre, for "how far" lines. */
const CENTRE = { x: 1541, z: 146 };

const SHOWN = new Set(NAMED_ROADS);

/** Names what's under the bird: businesses, resorts, districts, streets and peaks. */
export class Places {
  private roadGrid = new Map<string, { name: string; ax: number; az: number; bx: number; bz: number }[]>();
  private readonly cell = 250;
  private pois: OsmPoi[];

  constructor(private osm: OsmData) {
    for (const r of osm.roads) {
      if (!r.name || !SHOWN.has(r.name)) continue;
      const p = r.pts;
      for (let i = 0; i + 3 < p.length; i += 2) {
        const seg = { name: r.name, ax: p[i], az: p[i + 1], bx: p[i + 2], bz: p[i + 3] };
        const k = this.key((seg.ax + seg.bx) / 2, (seg.az + seg.bz) / 2);
        let list = this.roadGrid.get(k);
        if (!list) this.roadGrid.set(k, (list = []));
        list.push(seg);
      }
    }
    this.pois = osm.pois.filter((p) => p.name && POI_KIND[p.kind]);
  }

  private key(x: number, z: number) {
    return `${Math.floor(x / this.cell)},${Math.floor(z / this.cell)}`;
  }

  nearestRoad(x: number, z: number, maxDist: number): string | null {
    let best = maxDist;
    let name: string | null = null;
    const ci = Math.floor(x / this.cell);
    const cj = Math.floor(z / this.cell);
    for (let dj = -1; dj <= 1; dj++) {
      for (let di = -1; di <= 1; di++) {
        const list = this.roadGrid.get(`${ci + di},${cj + dj}`);
        if (!list) continue;
        for (const s of list) {
          const dx = s.bx - s.ax;
          const dz = s.bz - s.az;
          const t = Math.max(0, Math.min(1, ((x - s.ax) * dx + (z - s.az) * dz) / (dx * dx + dz * dz + 1e-6)));
          const d = Math.hypot(s.ax + dx * t - x, s.az + dz * t - z);
          if (d < best) {
            best = d;
            name = s.name;
          }
        }
      }
    }
    return name && (ROAD_LABEL[name] ?? name);
  }

  private within(list: Area[], x: number, z: number) {
    let hit: Area | null = null;
    for (const a of list) if (Math.hypot(a.x - x, a.z - z) < a.r && (!hit || a.r < hit.r)) hit = a;
    return hit;
  }

  at(x: number, z: number, agl: number): PlaceInfo {
    // Low over the street: name the business under the bird.
    if (agl < 120) {
      let best: OsmPoi | null = null;
      let bd = 40 + agl * 0.3;
      for (const p of this.pois) {
        const d = Math.hypot(p.x - x, p.z - z);
        if (d < bd) (bd = d), (best = p);
      }
      if (best) return { title: best.name, subtitle: POI_KIND[best.kind] };
    }
    const road = agl < 250 ? this.nearestRoad(x, z, 60) : null;

    const resort = agl < 600 ? this.within(RESORT_AREAS, x, z) : null;
    if (resort) return { title: resort.name, subtitle: road ? `Above ${road}` : resort.note ?? 'Las Vegas' };

    let peak: { name: string; ele: number | null } | null = null;
    let pd = 650;
    for (const p of this.osm.peaks) {
      if (!p.name) continue;
      const d = Math.hypot(p.x - x, p.z - z);
      if (d < pd) (pd = d), (peak = p);
    }
    if (peak) return { title: peak.name, subtitle: peak.ele ? `${peak.ele} m \u00b7 ${Math.round(peak.ele * 3.281).toLocaleString()} ft summit` : 'Summit' };

    const district = this.within(DISTRICTS, x, z);
    if (district) return { title: district.name, subtitle: road ? `Above ${road}` : district.note ?? 'Las Vegas Valley' };

    const dist = Math.hypot(x - CENTRE.x, z - CENTRE.z);
    const dir = compassWord(Math.atan2(x - CENTRE.x, -(z - CENTRE.z)));
    if (road) return { title: road, subtitle: dist < 600 ? 'The Four Corners' : `${(dist / 1000).toFixed(1)} km ${dir} of the Four Corners` };
    return { title: 'Paradise, Nevada', subtitle: `${(dist / 1000).toFixed(1)} km ${dir} of Flamingo and the Strip` };
  }
}

export function compassWord(rad: number): string {
  const names = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
  const i = Math.round(((rad / (Math.PI * 2)) * 8 + 8) % 8) % 8;
  return names[i];
}
