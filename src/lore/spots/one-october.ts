import type { Spot } from '../spot';
import { near } from '../tests';

export const oneOctoberSpot: Spot = {
  id: 'one-october',
  kind: 'lore',
  kicker: 'Las Vegas Village · 1 October 2017',
  title: 'Vegas Strong',
  text: 'On 1 October 2017 a gunman firing from the Mandalay Bay tower killed 60 people at the Route 91 Harvest country music festival on this lot. The city answered with blood-donor lines around the block and two words: Vegas Strong.',
  at: { x: 1708, z: 2340 },
  hint: 'The open lot across the Strip from Mandalay Bay and the Luxor.',
  r: 220,
  h: 80,
  test: near({ x: 1708, z: 2340 }, 150, 80),
};
