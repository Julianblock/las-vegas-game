import type { Spot } from '../spot';
import { near } from '../tests';

export const pawnStarsSpot: Spot = {
  id: 'pawn-stars',
  kind: 'lore',
  kicker: 'Gold & Silver Pawn',
  title: 'The best I can do is…',
  text: 'Rick Harrison’s family pawn shop on Las Vegas Boulevard became the set of Pawn Stars in 2009, and coach tours have queued outside ever since.',
  at: { x: 4024, z: -5068 },
  hint: 'Las Vegas Boulevard, just south of downtown.',
  r: 160,
  h: 50,
  test: near({ x: 4024, z: -5068 }, 120, 50),
};
