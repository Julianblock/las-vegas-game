import type { Spot } from '../spot';
import { near } from '../tests';

export const townsiteAuctionSpot: Spot = {
  id: 'townsite-auction',
  kind: 'lore',
  kicker: 'The Plaza · Main and Fremont',
  title: 'The day Las Vegas was sold',
  text: 'On 15 May 1905 the railroad auctioned off 1,200 lots of desert beside its new depot here, in the heat, to buyers off special trains from Los Angeles and Salt Lake. That auction founded the town. The depot is gone; the Plaza hotel stands on its site at the head of Fremont Street.',
  at: { x: 3872, z: -6160 },
  hint: 'Go to the west end of Fremont Street, where the Plaza faces down the street.',
  r: 150,
  h: 50,
  test: near({ x: 3872, z: -6160 }, 110, 50),
};
