import type { Spot } from '../spot';
import { within } from '../tests';

export const flamingoRoadSpot: Spot = {
  id: 'flamingo-road',
  kind: 'lore',
  kicker: 'Flamingo Road',
  title: 'Named for a hotel',
  text: 'For decades this was a section-line track through the creosote. It took its name from Bugsy Siegel’s Flamingo, and now carries traffic from the Strip west past the Rio, the Palms and the Gold Coast to Decatur and the suburbs beyond.',
  at: { x: 0, z: 49 },
  hint: 'Follow Flamingo Road west from the Strip, low over the traffic.',
  r: 900,
  h: 260,
  test: within(-1650, -40, 1500, 230, 80),
};
