import type { Spot } from '../spot';
import { near } from '../tests';

export const tonyRomasSpot: Spot = {
  id: 'tony-romas',
  kind: 'lore',
  kicker: 'Tony Roma’s · East Sahara',
  title: 'The Eldorado that didn’t kill Lefty',
  text: 'On 4 October 1982 Frank “Lefty” Rosenthal turned the key in his Cadillac Eldorado in the lot outside Tony Roma’s and it exploded. A steel plate under the driver’s seat, fitted at the factory, sent the blast outward. He rolled out of the burning car and lived another 26 years.',
  at: { x: 3884, z: -3172 },
  hint: 'Find the rib joint parking lot on East Sahara.',
  r: 150,
  h: 50,
  test: near({ x: 3884, z: -3172 }, 110, 50),
};
