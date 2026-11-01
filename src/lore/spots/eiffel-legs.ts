import type { Spot } from '../spot';
import { aloft } from '../tests';

export const eiffelLegsSpot: Spot = {
  id: 'eiffel-legs',
  kind: 'secret',
  kicker: 'Paris Las Vegas',
  title: 'Between the legs',
  text: 'You threaded the needle through the iron lattice. The real one in Paris has had a few pilots try it; most of them did not get a second go.',
  at: { x: 1606, z: 397 },
  hint: 'Fly between the legs of the Eiffel Tower.',
  r: 80,
  h: 40,
  test: aloft({ x: 1605.5, z: 392.5 }, 14, 4, 50),
};
