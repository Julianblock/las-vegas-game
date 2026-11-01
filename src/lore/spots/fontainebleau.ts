import type { Spot } from '../spot';
import { near } from '../tests';

export const fontainebleauSpot: Spot = {
  id: 'fontainebleau',
  kind: 'lore',
  kicker: 'Fontainebleau · 2023',
  title: 'Fourteen years in the dark',
  text: 'Work began in 2007, and the blue tower was 70 per cent finished when the money ran out in 2009. It stood empty for fourteen years, sold and resold, before opening in December 2023 as the tallest occupied building in Nevada.',
  at: { x: 2746, z: -2432 },
  hint: 'Fly past the blue glass crescent on the north Strip.',
  r: 320,
  h: 160,
  test: near({ x: 2746, z: -2432 }, 180, 240),
};
