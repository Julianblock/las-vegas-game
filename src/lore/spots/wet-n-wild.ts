import type { Spot } from '../spot';
import { near } from '../tests';

export const wetNWildSpot: Spot = {
  id: 'wet-n-wild',
  kind: 'lore',
  kicker: 'Wet ’n Wild · 1985–2004',
  title: 'Water slides on the Strip',
  text: 'For nearly twenty years the Strip had a water park beside the Sahara, with slides, a wave pool and a lazy river. It closed in 2004 for a tower that never came, and the land sat empty for years.',
  at: { x: 2787, z: -2616 },
  hint: 'Find the lot between the Sahara and the Fontainebleau.',
  r: 130,
  h: 50,
  test: near({ x: 2787, z: -2616 }, 90, 50),
};
