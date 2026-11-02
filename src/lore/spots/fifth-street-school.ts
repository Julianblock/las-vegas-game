import type { Spot } from '../spot';
import { near } from '../tests';

export const fifthStreetSchoolSpot: Spot = {
  id: 'fifth-street-school',
  kind: 'lore',
  kicker: 'Fifth Street School · 1936',
  title: 'The Mission Revival school',
  text: 'Built in 1936 as the town’s grammar school, with white stucco arcades and red tile roofs. The city restored it and filled it with arts groups and architects.',
  at: { x: 4064, z: -5566 },
  hint: 'Look for the white arcaded school on 4th Street south of Fremont.',
  r: 110,
  h: 50,
  test: near({ x: 4064, z: -5566 }, 70, 50),
};
