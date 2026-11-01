import type { Spot } from '../spot';
import { near } from '../tests';

export const doubleDownSpot: Spot = {
  id: 'double-down',
  kind: 'lore',
  kicker: 'Double Down Saloon · 1992',
  title: 'Ass Juice and punk rock',
  text: 'A dive on Paradise Road with murals on every surface, punk on the jukebox and a house drink called Ass Juice. A sign behind the bar sets the price of throwing up.',
  at: { x: 3572, z: 1161 },
  hint: 'Drop down on Paradise Road near Harmon.',
  r: 120,
  h: 50,
  test: near({ x: 3330, z: 720 }, 70, 50),
};
