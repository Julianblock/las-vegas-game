import type { Spot } from '../spot';
import { near } from '../tests';

export const caesarsSpot: Spot = {
  id: 'caesars',
  kind: 'lore',
  kicker: 'Caesars Palace · 1966',
  title: 'No apostrophe',
  text: 'Jay Sarno left the apostrophe off Caesars because every guest was meant to be a Caesar. On New Year’s Eve 1967 Evel Knievel jumped its fountains on a motorcycle, crashed on the landing and spent weeks in hospital. The jump made him a star.',
  at: { x: 1430, z: -80 },
  hint: 'Fly low over the fountains in front of Caesars Palace, at Flamingo and the Strip.',
  r: 260,
  h: 90,
  test: near({ x: 1430, z: -80 }, 120, 60),
};
