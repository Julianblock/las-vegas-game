import type { Spot } from '../spot';
import { near } from '../tests';

export const writersBlockSpot: Spot = {
  id: 'writers-block',
  kind: 'lore',
  kicker: 'The Writer’s Block · Downtown',
  title: 'Books and an artificial bird sanctuary',
  text: 'An independent bookshop that opened in 2014 and keeps an “artificial bird sanctuary” of handmade birds you can adopt. Its back room runs writing workshops for kids.',
  at: { x: 4231, z: -5211 },
  hint: 'Find the bookshop south of Fremont Street.',
  r: 150,
  h: 50,
  test: near({ x: 4231, z: -5211 }, 110, 50),
};
