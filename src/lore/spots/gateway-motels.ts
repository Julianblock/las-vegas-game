import type { Spot } from '../spot';
import { near } from '../tests';

export const gatewayMotelsSpot: Spot = {
  id: 'gateway-motels',
  kind: 'lore',
  kicker: 'Motel row · Las Vegas Boulevard',
  title: 'Before the megaresorts',
  text: 'Before the interstate, this was the road in from Los Angeles, and motor courts lined it with neon to catch the cars: the Shalimar, the High Hat, the Desert Star, the Tod. Several of their signs still stand between Charleston and Sahara.',
  at: { x: 3600, z: -4380 },
  hint: 'Drive the boulevard between Sahara and Charleston.',
  r: 220,
  h: 50,
  test: near({ x: 3600, z: -4380 }, 180, 50),
};
