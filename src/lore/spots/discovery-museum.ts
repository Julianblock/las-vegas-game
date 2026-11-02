import type { Spot } from '../spot';
import { near } from '../tests';

export const discoveryMuseumSpot: Spot = {
  id: 'discovery-museum',
  kind: 'lore',
  kicker: 'Discovery Children’s Museum · Symphony Park',
  title: 'Seventy feet of things to climb',
  text: 'The children’s museum moved here beside the Smith Center in 2013. Its centrepiece is the Summit, a 70-foot tower of ramps, nets and gadgets that kids climb all the way to the top.',
  at: { x: 3372, z: -5853 },
  hint: 'Look for the museum next door to the Smith Center.',
  r: 150,
  h: 50,
  test: near({ x: 3372, z: -5853 }, 110, 50),
};
