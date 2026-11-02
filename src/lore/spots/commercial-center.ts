import type { Spot } from '../spot';
import { near } from '../tests';

export const commercialCenterSpot: Spot = {
  id: 'commercial-center',
  kind: 'lore',
  kicker: 'Commercial Center · East Sahara',
  title: 'The plaza that fed the city',
  text: 'Jerome Mack and Merv Adelson opened it in 1963 as “the downtown of tomorrow”, with more shop space than all of Fremont Street, and its Ice Palace rink doubled as a rock venue. As the shoppers moved to the malls, its storefronts filled with Thai, Korean and Japanese kitchens, bars and clubs. Lotus of Siam cooked here for decades before moving to Flamingo.',
  at: { x: 4520, z: -2930 },
  hint: 'Find the old shopping plaza on East Sahara near Maryland Parkway.',
  r: 160,
  h: 50,
  test: near({ x: 4520, z: -2930 }, 120, 50),
};
