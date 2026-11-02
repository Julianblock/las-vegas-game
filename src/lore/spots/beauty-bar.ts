import type { Spot } from '../spot';
import { near } from '../tests';

export const beautyBarSpot: Spot = {
  id: 'beauty-bar',
  kind: 'lore',
  kicker: 'Beauty Bar · Fremont East',
  title: 'Martinis under the hair dryers',
  text: 'Beauty Bar opened in 2002, one of the first bars of the Fremont East revival. Its fixtures came from an old beauty salon: chrome hood dryers, salon chairs, and on some nights a manicure with your martini.',
  at: { x: 4496, z: -5861 },
  hint: 'Walk Fremont East a block past the boulevard.',
  r: 150,
  h: 50,
  test: near({ x: 4496, z: -5861 }, 110, 50),
};
