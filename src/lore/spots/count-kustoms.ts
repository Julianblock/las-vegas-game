import type { Spot } from '../spot';
import { near } from '../tests';

export const countKustomsSpot: Spot = {
  id: 'count-kustoms',
  kind: 'lore',
  kicker: 'Count’s Kustoms · Industrial Road',
  title: 'Counting Cars',
  text: 'Danny “The Count” Koker turned his custom car and bike shop into a TV show, Counting Cars, a spin-off of Pawn Stars. Fans drive by to peer in at hot rods waiting in the bays.',
  at: { x: 1859, z: -2683 },
  hint: 'Look along Industrial Road behind the north Strip.',
  r: 150,
  h: 50,
  test: near({ x: 1859, z: -2683 }, 110, 50),
};
