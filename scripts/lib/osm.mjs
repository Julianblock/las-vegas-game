import fs from 'node:fs/promises';
import path from 'node:path';
import { latLonToLocal, regionBounds } from './geo.mjs';

const UA = 'las-vegas-game/0.1 (github.com/Julianblock/las-vegas-game)';
const ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
];

async function overpass(query, cacheFile) {
  try {
    return JSON.parse(await fs.readFile(cacheFile, 'utf8'));
  } catch {}
  for (let round = 0; round < 4; round++) for (const url of ENDPOINTS) {
    if (round) await new Promise((r) => setTimeout(r, 5000 * round));
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      await fs.mkdir(path.dirname(cacheFile), { recursive: true });
      await fs.writeFile(cacheFile, JSON.stringify(json));
      return json;
    } catch (err) {
      console.warn(`  ${url} failed: ${err.message}`);
    }
  }
  throw new Error('All Overpass endpoints failed');
}

const r1 = (v) => Math.round(v * 10) / 10;

function toLine(geometry) {
  const pts = [];
  for (const g of geometry) {
    const p = latLonToLocal(g.lat, g.lon);
    pts.push(r1(p.x), r1(p.z));
  }
  return pts;
}

function building(geometry) {
  const pts = geometry.map((g) => latLonToLocal(g.lat, g.lon));
  if (pts.length < 3) return null;
  let cx = 0;
  let cz = 0;
  for (const p of pts) {
    cx += p.x;
    cz += p.z;
  }
  cx /= pts.length;
  cz /= pts.length;
  // Orientation from the longest edge, extents measured in that frame.
  let best = 0;
  let ang = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1].x - pts[i].x;
    const dz = pts[i + 1].z - pts[i].z;
    const l = dx * dx + dz * dz;
    if (l > best) {
      best = l;
      ang = Math.atan2(dz, dx);
    }
  }
  const c = Math.cos(-ang);
  const s = Math.sin(-ang);
  let minU = Infinity;
  let maxU = -Infinity;
  let minV = Infinity;
  let maxV = -Infinity;
  for (const p of pts) {
    const u = (p.x - cx) * c - (p.z - cz) * s;
    const v = (p.x - cx) * s + (p.z - cz) * c;
    minU = Math.min(minU, u);
    maxU = Math.max(maxU, u);
    minV = Math.min(minV, v);
    maxV = Math.max(maxV, v);
  }
  const w = maxU - minU;
  const d = maxV - minV;
  if (w < 2 || d < 2 || w > 400 || d > 400) return null;
  return [r1(cx), r1(cz), r1(w), r1(d), Math.round(ang * 1000) / 1000];
}

/** The one-word kind of a point of interest, or '' for ordinary features. */
function poiKind(t) {
  if (t.amenity === 'grave_yard') return '';
  if (t.amenity && /^(fuel|fast_food|restaurant|casino|cafe|bar|post_office|fire_station|school|community_centre|courthouse|place_of_worship|social_facility|shelter)$/.test(t.amenity)) return t.amenity;
  if (t.shop) return 'shop';
  if (t.tourism && /^(motel|hotel|museum|viewpoint|camp_site|caravan_site|attraction|information)$/.test(t.tourism)) return t.tourism;
  if (t.historic) return t.historic === 'archaeological_site' ? 'petroglyph' : 'historic';
  if (t.man_made && /^(mineshaft|adit|water_tower|storage_tank|headframe)$/.test(t.man_made)) return t.man_made === 'adit' ? 'mineshaft' : t.man_made;
  if (t.leisure && /^(park|marina|slipway)$/.test(t.leisure)) return t.leisure;
  if (t.natural && /^(spring|saddle|cave_entrance)$/.test(t.natural)) return t.natural;
  if (t.mountain_pass === 'yes') return 'saddle';
  return '';
}

/** Joins a multipolygon's outer member ways end to end into closed rings. */
function rings(members) {
  const key = (g) => `${g.lat.toFixed(7)},${g.lon.toFixed(7)}`;
  const open = members.filter((m) => m.type === 'way' && m.role !== 'inner' && m.geometry?.length > 1).map((m) => m.geometry.slice());
  const out = [];
  while (open.length) {
    let ring = open.pop();
    for (let grew = true; grew && key(ring[0]) !== key(ring[ring.length - 1]); ) {
      grew = false;
      const end = key(ring[ring.length - 1]);
      for (let i = 0; i < open.length; i++) {
        const w = open[i];
        if (key(w[0]) === end) ring = ring.concat(w.slice(1));
        else if (key(w[w.length - 1]) === end) ring = ring.concat(w.slice(0, -1).reverse());
        else continue;
        open.splice(i, 1);
        grew = true;
        break;
      }
    }
    if (ring.length > 3) out.push(ring);
  }
  return out;
}

/** Building height in metres from OSM tags, or 0 when untagged. */
export function tagHeight(t, key = 'height', levelsKey = 'building:levels') {
  const h = parseFloat(t[key]);
  if (Number.isFinite(h)) return /ft|'/.test(t[key]) ? h * 0.3048 : h;
  const l = parseFloat(t[levelsKey]);
  return Number.isFinite(l) ? l * 3.4 : 0;
}

/** Shoelace area of a local-coordinate ring [x0, z0, x1, z1, …] in m². */
export function ringArea(pts) {
  let a = 0;
  for (let i = 0, n = pts.length; i < n; i += 2) {
    const j = (i + 2) % n;
    a += pts[i] * pts[j + 1] - pts[j] * pts[i + 1];
  }
  return Math.abs(a) / 2;
}

/** Even-odd point-in-polygon test on a flat ring. */
export function inRing(x, z, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 2; i < pts.length; j = i, i += 2) {
    const xi = pts[i], zi = pts[i + 1], xj = pts[j], zj = pts[j + 1];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

/** The resort corridor (matches the strip region in fetch-data.mjs). */
export const CORRIDOR = { size: 9000, cx: 700, cz: -300 };
/** Square of city around the corridor where every street and building is kept. */
const CITY = 14000;

export async function buildOsm(size, cacheDir) {
  const b = regionBounds(size);
  const bbox = `${b.south},${b.west},${b.north},${b.east}`;
  // Valley-wide: freeways and arterials, washes, Lake Mead, power lines, peaks, towns and masts.
  const query = `[out:json][timeout:300];
(
  way["highway"~"^(motorway|trunk|primary|secondary|tertiary)(_link)?$"](${bbox});
  way["waterway"~"^(river|canal|stream|drain|ditch)$"](${bbox});
  way["natural"="water"]["water"!~"^(pond|reflecting_pool|fountain)$"](${bbox});
  way["power"="line"](${bbox});
  node["natural"="peak"](${bbox});
  node["place"~"^(city|town|village|suburb)$"](${bbox});
  node["man_made"~"^(mast|tower|communications_tower)$"](${bbox});
);
out geom;`;
  const json = await overpass(query, path.join(cacheDir, `osm_${size}.json`));

  // The city around the corridor: every street, every building, parks, cemeteries
  // and businesses.
  const cb = regionBounds(CITY);
  const cbox = `${cb.south},${cb.west},${cb.north},${cb.east}`;
  const city = await overpass(
    `[out:json][timeout:300];
(
  way["highway"~"^(unclassified|residential|living_street)$"](${cbox});
  way["building"](${cbox});
  way["landuse"="cemetery"](${cbox});
  way["amenity"="grave_yard"](${cbox});
  nwr["amenity"~"^(fuel|fast_food|restaurant|casino|cafe|bar|post_office|fire_station|school|community_centre|courthouse|place_of_worship|social_facility|shelter|theatre|nightclub|cinema|university|hospital|police)$"](${cbox});
  nwr["shop"](${cbox});
  nwr["tourism"~"^(motel|hotel|museum|viewpoint|attraction|information|artwork|theme_park)$"](${cbox});
  nwr["historic"](${cbox});
  nwr["man_made"~"^(water_tower|storage_tank)$"](${cbox});
  nwr["leisure"~"^(park|stadium|golf_course|sports_centre)$"](${cbox});
);
out geom;`,
    path.join(cacheDir, `osm_city_${CITY}.json`),
  );
  json.elements.push(...city.elements);

  // The resort corridor in full 3D: building outlines and parts with their
  // heights, service drives, footbridges, the monorail, pools, lakes and lots.
  const sb = regionBounds(CORRIDOR.size, CORRIDOR.cx, CORRIDOR.cz);
  const sbox = `${sb.south},${sb.west},${sb.north},${sb.east}`;
  const corridor = await overpass(
    `[out:json][timeout:300];
(
  way["highway"="service"]["service"!~"^(parking_aisle|driveway|drive-through)$"](${sbox});
  way["highway"~"^(footway|pedestrian)$"]["bridge"](${sbox});
  way["highway"="pedestrian"](${sbox});
  way["building:part"](${sbox});
  relation["building"](${sbox});
  relation["building:part"](${sbox});
  way["railway"~"^(monorail|rail|light_rail)$"](${sbox});
  way["leisure"="swimming_pool"](${sbox});
  way["natural"="water"](${sbox});
  relation["natural"="water"](${sbox});
  way["amenity"="parking"](${sbox});
  way["landuse"~"^(grass|construction)$"](${sbox});
);
out geom;`,
    path.join(cacheDir, 'osm_corridor.json'),
  );
  json.elements.push(...corridor.elements);

  const out = { roads: [], waterways: [], waterAreas: [], buildings: [], power: [], peaks: [], places: [], masts: [], cemeteries: [], pois: [], masses: [], lots: [], pools: [], rails: [], bridges: [], plazas: [], lawns: [], sites: [] };
  const inCorridor = (pts) => {
    let x = 0, z = 0;
    for (let i = 0; i < pts.length; i += 2) {
      x += pts[i];
      z += pts[i + 1];
    }
    const n = pts.length / 2;
    return Math.abs(x / n - CORRIDOR.cx) < CORRIDOR.size / 2 && Math.abs(z / n - CORRIDOR.cz) < CORRIDOR.size / 2;
  };
  const seen = new Set();
  for (const e of json.elements) {
    const t = e.tags || {};
    const id = `${e.type}${e.id}`;
    if (seen.has(id)) continue;
    seen.add(id);
    if ((t.building || t['building:part']) && e.type !== 'node') {
      const outlines = e.type === 'relation' ? rings(e.members || []).map(toLine) : e.geometry ? [toLine(e.geometry)] : [];
      for (const pts of outlines) {
        if (pts.length < 8 || !inCorridor(pts)) continue;
        const h = tagHeight(t);
        const area = ringArea(pts);
        const garage = t.building === 'parking' || t.parking === 'multi-storey';
        if (!t['building:part'] && h < 12 && area < 2500 && !garage) continue;
        out.masses.push({
          name: t.name || '',
          part: t['building:part'] ? 1 : 0,
          h: r1(h || (garage ? 14 : Math.min(18, 6 + Math.sqrt(area) * 0.08))),
          min: r1(tagHeight(t, 'min_height', 'building:min_level')),
          colour: t['building:colour'] || t.colour || '',
          roof: t['roof:shape'] || '',
          garage: garage ? 1 : 0,
          pts: pts.slice(0, -2),
        });
        e.massed = true;
      }
      if (e.massed || t['building:part']) continue;
    }
    const kind = poiKind(t);
    if (kind) {
      const g = e.type === 'node' ? [{ lat: e.lat, lon: e.lon }] : e.geometry || (e.bounds && [{ lat: (e.bounds.minlat + e.bounds.maxlat) / 2, lon: (e.bounds.minlon + e.bounds.maxlon) / 2 }]);
      if (g && g.length) {
        let lat = 0;
        let lon = 0;
        for (const p of g) {
          lat += p.lat;
          lon += p.lon;
        }
        const p = latLonToLocal(lat / g.length, lon / g.length);
        const fp = e.type === 'way' && t.building && e.geometry ? building(e.geometry) : null;
        out.pois.push({ name: t.name || '', kind, brand: t.brand || '', x: r1(p.x), z: r1(p.z), ...(fp ? { fp: fp.slice(2) } : {}) });
        if (fp) out.buildings.push(fp);
        if (e.type !== 'way' || !t.highway) continue;
      }
    }
    if (e.type === 'node') {
      const p = latLonToLocal(e.lat, e.lon);
      const item = { name: t.name || '', x: r1(p.x), z: r1(p.z) };
      if (t.natural === 'peak') out.peaks.push({ ...item, ele: Number(t.ele) || null });
      else if (t.place) out.places.push({ ...item, kind: t.place });
      else if (t.man_made) out.masts.push({ ...item, height: Number(t.height) || null });
      continue;
    }
    if (e.type === 'relation') {
      if (t.natural === 'water') for (const ring of rings(e.members || [])) out.waterAreas.push({ name: t.name || '', pts: toLine(ring) });
      continue;
    }
    if (!e.geometry) continue;
    if (t.highway && t.bridge && /^(footway|pedestrian)$/.test(t.highway)) {
      out.bridges.push({ name: t.name || '', pts: toLine(e.geometry) });
      continue;
    }
    if (t.highway === 'pedestrian') {
      out.plazas.push({ name: t.name || '', pts: toLine(e.geometry) });
      continue;
    }
    if (t.railway) {
      out.rails.push({ name: t.name || '', kind: t.railway, pts: toLine(e.geometry) });
      continue;
    }
    if (t.leisure === 'swimming_pool') {
      out.pools.push({ name: t.name || '', pts: toLine(e.geometry).slice(0, -2) });
      continue;
    }
    if (t.amenity === 'parking') {
      if (!t.parking || t.parking === 'surface') out.lots.push({ name: t.name || '', pts: toLine(e.geometry).slice(0, -2) });
      continue;
    }
    if (t.landuse === 'grass') {
      out.lawns.push({ pts: toLine(e.geometry).slice(0, -2) });
      continue;
    }
    if (t.landuse === 'construction') {
      out.sites.push({ name: t.name || '', pts: toLine(e.geometry).slice(0, -2) });
      continue;
    }
    if (t.landuse === 'cemetery' || t.amenity === 'grave_yard') {
      out.cemeteries.push({ name: t.name || '', pts: toLine(e.geometry) });
    } else if (t.highway) {
      out.roads.push({ name: t.name || t.ref || '', kind: t.highway.replace('_link', ''), grade: Number((t.tracktype || '').slice(5)) || 0, lanes: Number(t.lanes) || 0, oneway: t.oneway === 'yes' || t.highway === 'motorway' ? 1 : t.oneway === '-1' ? -1 : 0, pts: toLine(e.geometry) });
    } else if (t.waterway) {
      out.waterways.push({ name: t.name || '', kind: t.waterway, pts: toLine(e.geometry) });
    } else if (t.natural === 'water') {
      out.waterAreas.push({ name: t.name || '', pts: toLine(e.geometry) });
    } else if (t.building) {
      const bld = building(e.geometry);
      if (bld) out.buildings.push(bld);
    } else if (t.power === 'line') {
      out.power.push({ pts: toLine(e.geometry) });
    }
  }
  // Where a building is modelled in parts, the parts replace its outline.
  const parts = out.masses.filter((m) => m.part);
  out.masses = out.masses.filter((m) => {
    if (m.part) return true;
    return !parts.some((p) => inRing(p.pts[0] * 0.5 + p.pts[4] * 0.5, p.pts[1] * 0.5 + p.pts[5] * 0.5, m.pts));
  });
  return out;
}
