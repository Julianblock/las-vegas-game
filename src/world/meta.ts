export interface RegionSpec {
  size: number;
  /** Centre of an off-centre region, metres from town; absent means centred on town. */
  cx?: number;
  cz?: number;
  heightRes: number;
  imageRes: number;
}

export interface HeightEncoding {
  offset: number;
  scale: number;
}

export type RegionName = 'inner' | 'mid' | 'far' | 'strip';

export interface WorldMeta {
  center: { lat: number; lon: number };
  regions: Record<RegionName, RegionSpec>;
  heightEncoding: Record<RegionName, HeightEncoding>;
  landcover: { size: number; res: number; classes: Record<string, number> };
  trees?: { size: number; count: number };
}

export const LC = {
  OTHER: 0,
  CREOSOTE: 1,
  JOSHUA: 2,
  BLACKBRUSH: 3,
  WASH: 4,
  GRASS: 5,
  WETLAND: 6,
  WATER: 7,
  URBAN_OPEN: 8,
  URBAN_LOW: 9,
  URBAN_MED: 10,
  URBAN_HIGH: 11,
  PINYON: 12,
  ROCK: 13,
  FARM: 14,
} as const;

export interface OsmRoad {
  name: string;
  kind: string;
  lanes: number;
  oneway?: number;
  /** OSM tracktype 1 (solid gravel) … 5 (faint two-rut), 0 when untagged. */
  grade?: number;
  pts: number[];
}

export interface OsmData {
  roads: OsmRoad[];
  waterways: { name: string; kind: string; pts: number[] }[];
  waterAreas: { name: string; pts: number[] }[];
  buildings: [number, number, number, number, number][];
  power: { pts: number[] }[];
  peaks: { name: string; x: number; z: number; ele: number | null }[];
  places: { name: string; x: number; z: number; kind: string }[];
  masts: { name: string; x: number; z: number; height: number | null }[];
  cemeteries: { name: string; pts: number[] }[];
  pois: OsmPoi[];
  /** Corridor buildings and building parts with their real outlines and heights. */
  masses: OsmMass[];
  /** Surface parking lots (open rings). */
  lots: { name: string; pts: number[] }[];
  /** Hotel and casino pools (open rings). */
  pools: { name: string; pts: number[] }[];
  /** The monorail and rail lines. */
  rails: { name: string; kind: string; pts: number[] }[];
  /** Pedestrian bridges over the Strip and the side streets. */
  bridges: { name: string; pts: number[] }[];
  /** Pedestrian promenades: the LINQ, the Park, the Forum's plazas. */
  plazas: { name: string; pts: number[] }[];
  /** Lawns and medians (open rings). */
  lawns: { pts: number[] }[];
  /** Construction sites (open rings). */
  sites: { name: string; pts: number[] }[];
}

/** A corridor building or building part, extruded from its outline. */
export interface OsmMass {
  name: string;
  /** 1 for a building:part. */
  part: number;
  /** Top above the ground (m). */
  h: number;
  /** Bottom above the ground for raised parts (m). */
  min: number;
  colour: string;
  roof: string;
  /** 1 for a multi-storey parking garage. */
  garage: number;
  /** Open outline ring [x0, z0, x1, z1, …]. */
  pts: number[];
}

/** A point of interest: a business, mine, spring, memorial or viewpoint. */
export interface OsmPoi {
  name: string;
  /** fuel, fast_food, restaurant, casino, motel, mineshaft, spring, historic, … */
  kind: string;
  brand: string;
  x: number;
  z: number;
  /** Building footprint when mapped: width, depth, angle. */
  fp?: [number, number, number];
}
