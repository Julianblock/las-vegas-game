import type { Spot } from '../spot';
import { near } from '../tests';

export const mirageSpot: Spot = {
  id: 'mirage',
  kind: 'lore',
  kicker: 'The Mirage · 1989–2024',
  title: 'The volcano is dark',
  text: 'Steve Wynn’s Mirage started the megaresort era; its volcano erupted out front every night for 35 years. It closed in July 2024. Hard Rock is turning it into a hotel shaped like a guitar, and the cranes are at work.',
  at: { x: 1500, z: -590 },
  hint: 'Fly over the lagoon and construction site on the west side of the Strip.',
  r: 260,
  h: 100,
  test: near({ x: 1500, z: -590 }, 140, 100),
};
