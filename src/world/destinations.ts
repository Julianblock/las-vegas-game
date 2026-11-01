import type { OsmData } from './meta';

export interface Destination {
  id: string;
  label: string;
  blurb: string;
}

export const DESTINATIONS: Destination[] = [
  { id: 'four-corners', label: 'Flamingo & the Strip', blurb: 'The Four Corners: Caesars, Bellagio, the Flamingo and the Horseshoe, with the bridges overhead and the crowds below.' },
  { id: 'strip-south', label: 'The Strip from the Welcome sign', blurb: 'Start at Betty Willis\u2019s sign and roll north past Mandalay Bay, the Luxor pyramid and the Excalibur castle.' },
  { id: 'strip-north', label: 'The north Strip', blurb: 'Resorts World, Circus Circus and the Fontainebleau, with the Strat standing over the Sahara.' },
  { id: 'flamingo-west', label: 'Flamingo Road from Decatur', blurb: 'Five kilometres east along Flamingo: Blueberry Hill, the strip malls, the Palms, the Gold Coast and the Rio, then over I-15 to Caesars.' },
  { id: 'flamingo-east', label: 'East Flamingo Road', blurb: 'Behind the Flamingo: Koval Lane, Battista\u2019s, the Stage Door and the Hughes Center office towers.' },
  { id: 'tropicana', label: 'Tropicana Avenue', blurb: 'The busiest corner on the Strip: MGM Grand\u2019s lion, New York-New York, Excalibur, and the ballpark rising on the Trop\u2019s old ground.' },
  { id: 'chinatown', label: 'Chinatown', blurb: 'Spring Mountain Road west of I-15, three miles of noodle houses, boba and karaoke in pagoda-roofed plazas.' },
  { id: 'paradise', label: 'Paradise Road', blurb: 'The convention-centre side of the corridor: the Westgate, the monorail overhead and the Sphere\u2019s back side.' },
  { id: 'fountains', label: 'Bellagio fountains', blurb: 'Stand at the rail on the Strip and wait for the next show. Come after dark for the best of it.' },
  { id: 'welcome-sign', label: 'Welcome to Fabulous Las Vegas', blurb: 'The sign in the median south of Mandalay Bay, with the photo queue and the Strip skyline behind.' },
  { id: 'sphere', label: 'Sphere', blurb: 'The giant LED ball behind the Venetian. Tonight it might be a planet, an eyeball or a jack-o\u2019-lantern.' },
  { id: 'grand-prix', label: 'Grand Prix Plaza', blurb: 'The pit building at Koval and Harmon. Pick the Grand Prix season and come after dark to watch the cars down the straight.' },
  { id: 'fremont', label: 'Fremont Street', blurb: 'Old downtown under the LED canopy: Vegas Vic, the Golden Nugget, Binion\u2019s, zipliners overhead and the crowds below.' },
  { id: 'fremont-east', label: 'Fremont East', blurb: 'Past the canopy: the fire-breathing mantis at Container Park, El Cortez, Atomic Liquors and the neon of the old motels.' },
  { id: 'allegiant', label: 'Allegiant Stadium', blurb: 'The Raiders\u2019 black glass dome across I-15 from Mandalay Bay.' },
];

const ROAD_ANCHORS: Record<string, [string, number, number]> = {
  'four-corners': ['South Las Vegas Boulevard', 1541, 260],
  'strip-south': ['South Las Vegas Boulevard', 1551, 3600],
  'strip-north': ['South Las Vegas Boulevard', 2420, -2100],
  'flamingo-west': ['West Flamingo Road', -1560, 58],
  'flamingo-east': ['East Flamingo Road', 2500, 168],
  tropicana: ['West Tropicana Avenue', 1150, 1680],
  chinatown: ['Spring Mountain Road', -700, -1060],
  paradise: ['Paradise Road', 3208, -900],
};

/** Where each anchored drive should face: toward this point. */
const FACING: Record<string, [number, number]> = {
  'four-corners': [1541, -1000],
  'strip-south': [1540, 0],
  'strip-north': [2900, -3000],
  'flamingo-west': [1541, 146],
  'flamingo-east': [1541, 146],
  tropicana: [2500, 1680],
  chinatown: [1500, -1000],
  paradise: [3300, -2500],
};

/** Off-road lookouts: position and the point to face. */
const LOOKOUTS: Record<string, [number, number, number, number]> = {
  fountains: [1508, 360, 1400, 330],
  'welcome-sign': [1551, 3815, 1551, 3766],
  sphere: [2680, -470, 2514, -580],
  allegiant: [760, 2660, 520, 2830],
  'grand-prix': [2640, 800, 2528, 748],
  fremont: [3960, -6150, 4337, -5961],
  'fremont-east': [4700, -5815, 4671, -5771],
};

export interface Spot {
  x: number;
  z: number;
  psi: number;
  /** On a two-way road: keep right of the centreline. */
  road: boolean;
}

/** Point on the matching roads closest to (ax, az), with the segment heading. */
function nearestOn(osm: OsmData, match: (name: string, kind: string) => boolean, ax: number, az: number) {
  let best = Infinity;
  let spot: { x: number; z: number; dx: number; dz: number } | null = null;
  for (const r of osm.roads) {
    if (!match(r.name, r.kind)) continue;
    const p = r.pts;
    for (let i = 0; i + 3 < p.length; i += 2) {
      const ex = p[i + 2] - p[i], ez = p[i + 3] - p[i + 1];
      const l2 = ex * ex + ez * ez;
      if (l2 < 1) continue;
      const t = Math.max(0, Math.min(1, ((ax - p[i]) * ex + (az - p[i + 1]) * ez) / l2));
      const x = p[i] + ex * t, z = p[i + 1] + ez * t;
      const d = Math.hypot(ax - x, az - z);
      if (d < best) {
        best = d;
        const l = Math.sqrt(l2);
        spot = { x, z, dx: ex / l, dz: ez / l };
      }
    }
  }
  return spot;
}

export function resolveDestination(id: string, osm: OsmData): Spot | null {
  const anchor = ROAD_ANCHORS[id];
  if (anchor) {
    const s = nearestOn(osm, (n) => n === anchor[0], anchor[1], anchor[2]);
    if (!s) return null;
    const [fx, fz] = FACING[id];
    const sg = s.dx * (fx - s.x) + s.dz * (fz - s.z) >= 0 ? 1 : -1;
    return { x: s.x, z: s.z, psi: Math.atan2(s.dx * sg, s.dz * sg), road: true };
  }
  const look = LOOKOUTS[id];
  if (look) {
    const [x, z, fx, fz] = look;
    return { x, z, psi: Math.atan2(fx - x, fz - z), road: false };
  }
  return null;
}
