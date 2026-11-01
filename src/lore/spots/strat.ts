import type { Spot } from '../spot';
import { near } from '../tests';

export const stratSpot: Spot = {
  id: 'strat',
  kind: 'lore',
  kicker: 'The Strat · 1996',
  title: 'Bob Stupak’s tower',
  text: 'Gambler Bob Stupak ran Vegas World on this lot and dreamed of a tower taller than the Eiffel. The Stratosphere opened in 1996 at 1,149 feet, the tallest freestanding observation tower in the country, with thrill rides hanging off the top.',
  at: { x: 3003, z: -3507 },
  hint: 'Fly up to the pod of the tall tower north of the Sahara.',
  r: 400,
  h: 260,
  test: near({ x: 3003, z: -3507 }, 200, 400),
};
