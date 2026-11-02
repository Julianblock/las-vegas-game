import type { Spot } from '../spot';
import { near } from '../tests';

export const frankSinatraDriveSpot: Spot = {
  id: 'frank-sinatra-drive',
  kind: 'lore',
  kicker: 'Frank Sinatra Drive · at Flamingo',
  title: 'The Chairman’s back door',
  text: 'Frank Sinatra Drive runs behind the west-side resorts: Bellagio, Caesars, the Mirage, past their loading docks, laundries and employee garages. Sinatra first played Las Vegas at the Desert Inn in 1951, and the drive bearing his name carries the trucks that keep the Strip stocked.',
  at: { x: 956, z: 159 },
  hint: 'Find the service road behind the Bellagio where it meets Flamingo.',
  r: 150,
  h: 50,
  test: near({ x: 956, z: 159 }, 110, 50),
};
