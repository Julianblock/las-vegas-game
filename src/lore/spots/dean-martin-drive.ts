import type { Spot } from '../spot';
import { near } from '../tests';

export const deanMartinDriveSpot: Spot = {
  id: 'dean-martin-drive',
  kind: 'lore',
  kicker: 'Dean Martin Drive · at Flamingo',
  title: 'Dino’s road',
  text: 'West of the freeway, Industrial Road turns into Dean Martin Drive, named for the crooner who spent the 1960s sipping apple juice from a highball glass on stage at the Sands with Frank and Sammy. It’s a road of warehouses, sound stages and back lots that feeds the Strip.',
  at: { x: 584, z: 214 },
  hint: 'Find where Dean Martin Drive crosses Flamingo, west of the I-15.',
  r: 150,
  h: 50,
  test: near({ x: 584, z: 214 }, 110, 50),
};
