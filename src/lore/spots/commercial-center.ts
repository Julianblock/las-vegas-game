import type { Spot } from '../spot';
import { near } from '../tests';

export const commercialCenterSpot: Spot = {
  id: 'commercial-center',
  kind: 'lore',
  kicker: 'Commercial Center · East Sahara',
  title: 'The plaza that fed the city',
  text: 'One of the first big shopping plazas in town, built in the 1960s off East Sahara. As the shoppers moved to the malls, its storefronts filled with Thai, Korean and Japanese kitchens, bars and clubs. Lotus of Siam cooked here for decades before moving to Flamingo.',
  at: { x: 4730, z: -3184 },
  hint: 'Find the old shopping plaza on East Sahara near Maryland Parkway.',
  r: 160,
  h: 50,
  test: near({ x: 4730, z: -3184 }, 120, 50),
};
