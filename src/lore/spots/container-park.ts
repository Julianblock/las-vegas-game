import type { Spot } from '../spot';
import { near } from '../tests';

export const containerParkSpot: Spot = {
  id: 'container-park',
  kind: 'lore',
  kicker: 'Downtown Container Park · 2013',
  title: 'Shipping crates and a mantis',
  text: 'Shops and bars in stacked shipping containers, a treehouse playground, and out front a 40-foot steel praying mantis from Burning Man that shoots fire from its antennae after dark.',
  at: { x: 4636, z: -5713 },
  hint: 'East along Fremont Street from the canopy.',
  r: 160,
  h: 50,
  test: near({ x: 4636, z: -5713 }, 120, 50),
};
