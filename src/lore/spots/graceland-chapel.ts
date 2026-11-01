import type { Spot } from '../spot';
import { near } from '../tests';

export const gracelandChapelSpot: Spot = {
  id: 'graceland-chapel',
  kind: 'lore',
  kicker: 'Graceland Wedding Chapel',
  title: 'Married by the King',
  text: 'For decades an Elvis impersonator has been on hand to walk brides down the aisle and sing Love Me Tender. Jon Bon Jovi married his high-school sweetheart here in 1989.',
  at: { x: 4080, z: -5180 },
  hint: 'Keep north up the boulevard toward downtown.',
  r: 140,
  h: 50,
  test: near({ x: 4080, z: -5180 }, 80, 50),
};
