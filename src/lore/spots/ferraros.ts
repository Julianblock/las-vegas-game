import type { Spot } from '../spot';
import { near } from '../tests';

export const ferrarosSpot: Spot = {
  id: 'ferraros',
  kind: 'lore',
  kicker: 'Ferraro’s · Paradise Road',
  title: 'Forty years of osso buco',
  text: 'Gino Ferraro opened his restaurant in 1985. Four decades on the family still runs it, cooking the dishes Gino brought from Bologna.',
  at: { x: 3424, z: 754 },
  hint: 'Look along Paradise Road south of Flamingo.',
  r: 150,
  h: 50,
  test: near({ x: 3424, z: 754 }, 110, 50),
};
