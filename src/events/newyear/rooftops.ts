/**
 * Rooftops the midnight fireworks go up from, as on recent New Year's Eves:
 * position (world metres) and roof height above the street.
 */
export interface Rooftop {
  name: string;
  x: number;
  z: number;
  roof: number;
}

export const ROOFTOPS: Rooftop[] = [
  { name: 'The Strat', x: 3003, z: -3507, roof: 255 },
  { name: 'Resorts World', x: 1950, z: -2081, roof: 200 },
  { name: 'Treasure Island', x: 1610, z: -969, roof: 110 },
  { name: 'The Venetian', x: 1825, z: -579, roof: 145 },
  { name: 'Caesars Palace', x: 1394, z: -22, roof: 110 },
  { name: 'Planet Hollywood', x: 1690, z: 668, roof: 115 },
  { name: 'Aria', x: 1205, z: 969, roof: 180 },
  { name: 'MGM Grand', x: 1834, z: 1503, roof: 90 },
];
