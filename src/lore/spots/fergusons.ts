import type { Spot } from '../spot';
import { near } from '../tests';

export const fergusonsSpot: Spot = {
  id: 'fergusons',
  kind: 'lore',
  kicker: 'Fergusons Downtown · East Fremont',
  title: 'The motel that became a block party',
  text: 'Ferguson’s Motel took in travellers on old US-95 from 1940. After it closed, the bungalows were turned into studios, a market and a courtyard where East Fremont holds its weekend events.',
  at: { x: 5055, z: -5659 },
  hint: 'Head east down Fremont past the Atomic.',
  r: 150,
  h: 50,
  test: near({ x: 5055, z: -5659 }, 110, 50),
};
