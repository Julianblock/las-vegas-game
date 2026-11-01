/**
 * Harry Reid International's runways, from OpenStreetMap, in world metres.
 * Each is given by its two thresholds, named for the direction you land.
 */
export interface Runway {
  name: string;
  /** Threshold you land past, and the far end you roll toward. */
  from: { x: number; z: number };
  to: { x: number; z: number };
}

/** West flow, the usual afternoon setup: arrivals on 26L and 26R from over Henderson... */
export const ARRIVALS: Runway[] = [
  { name: '26R', from: { x: 6194, z: 4406 }, to: { x: 1779, z: 4412 } },
  { name: '26L', from: { x: 5769, z: 4714 }, to: { x: 2568, z: 4717 } },
];

/** ...and departures off 1L and 1R, climbing north past the east side of the Strip. */
export const DEPARTURES: Runway[] = [
  { name: '1R', from: { x: 2023, z: 4649 }, to: { x: 3276, z: 1939 } },
  { name: '1L', from: { x: 1764, z: 4528 }, to: { x: 3016, z: 1819 } },
];

/** The Strip's helicopter tour terminal by Russell Road, and its pads. */
export const HELIPORT = { x: 2080, z: 3090 };
