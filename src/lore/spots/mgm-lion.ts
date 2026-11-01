import type { Spot } from '../spot';
import { near } from '../tests';

export const mgmLionSpot: Spot = {
  id: 'mgm-lion',
  kind: 'lore',
  kicker: 'MGM Grand · 1993',
  title: 'Through the lion’s mouth',
  text: 'The emerald MGM Grand opened in 1993 with its entrance through the open jaws of a lion. Many Asian gamblers found walking into a lion’s mouth unlucky and stayed away, so in 1998 it was replaced by the 45-foot bronze lion on the corner.',
  at: { x: 1587, z: 1634 },
  hint: 'Find the bronze lion on the corner of Tropicana and the Strip.',
  r: 120,
  h: 40,
  test: near({ x: 1587, z: 1634 }, 50, 40),
};
