import type { Spot } from '../spot';
import { near } from '../tests';

export const lindoMichoacanSpot: Spot = {
  id: 'lindo-michoacan',
  kind: 'lore',
  kicker: 'Lindo Michoacán · Desert Inn Road',
  title: 'Coffee on fire',
  text: 'Javier Barajas opened Lindo Michoacán in 1990 with recipes from his home state of Michoacán. Waiters set the Mexican coffee on fire at your table and pour it from arm’s length.',
  at: { x: 6886, z: -1487 },
  hint: 'Find the Mexican restaurant on Desert Inn Road east of Maryland Parkway.',
  r: 150,
  h: 50,
  test: near({ x: 6886, z: -1487 }, 110, 50),
};
