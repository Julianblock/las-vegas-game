import type { Spot } from '../spot';
import { near } from '../tests';

export const goldSpikeSpot: Spot = {
  id: 'gold-spike',
  kind: 'lore',
  kicker: 'Gold Spike · Ogden Avenue',
  title: 'Penny slots to backyard bar',
  text: 'The Gold Spike was the last place in town with penny slots and penny keno. In 2013 Tony Hsieh’s Downtown Project pulled out the machines and turned it into a bar with giant Jenga and a lawn out back.',
  at: { x: 4445, z: -6099 },
  hint: 'Find the bar a block north of Fremont East.',
  r: 150,
  h: 50,
  test: near({ x: 4445, z: -6099 }, 110, 50),
};
