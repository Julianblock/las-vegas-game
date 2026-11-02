import type { Spot } from '../spot';
import { near } from '../tests';

export const mainStreetStationSpot: Spot = {
  id: 'main-street-station',
  kind: 'lore',
  kicker: 'Main Street Station · downtown',
  title: 'A piece of the Berlin Wall',
  text: 'Main Street Station is stuffed with antiques: Victorian chandeliers, a private railcar built for Buffalo Bill. The strangest is in the men’s room, where three urinals are mounted on a slab of the Berlin Wall.',
  at: { x: 4012, z: -6458 },
  hint: 'Go to the Victorian casino just north of Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 4012, z: -6458 }, 110, 50),
};
