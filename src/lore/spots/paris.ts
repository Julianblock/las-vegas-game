import type { Spot } from '../spot';
import { near } from '../tests';

export const parisSpot: Spot = {
  id: 'paris',
  kind: 'lore',
  kicker: 'Paris Las Vegas · 1999',
  title: 'Half the Eiffel Tower',
  text: 'The tower is half the size of the original, built from Gustave Eiffel’s drawings. It was going to be full size until the airport said no; three of its legs drop through the casino roof onto the gaming floor.',
  at: { x: 1606, z: 397 },
  hint: 'Fly up to the Eiffel Tower on the Strip.',
  r: 220,
  h: 120,
  test: near({ x: 1606, z: 397 }, 80, 180),
};
