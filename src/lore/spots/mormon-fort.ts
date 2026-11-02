import type { Spot } from '../spot';
import { near } from '../tests';

export const mormonFortSpot: Spot = {
  id: 'mormon-fort',
  kind: 'lore',
  kicker: 'Old Mormon Fort · 1855',
  title: 'The first walls',
  text: 'In 1855 Mormon missionaries from Salt Lake City built an adobe fort beside Las Vegas Creek, the first permanent settlement in the valley by newcomers. They gave up within three years. A stretch of its wall still stands, the oldest building raised by settlers in Nevada.',
  at: { x: 5071, z: -7147 },
  hint: 'Look for the adobe fort on Las Vegas Boulevard North, past the Neon Museum.',
  r: 130,
  h: 50,
  test: near({ x: 5071, z: -7147 }, 90, 50),
};
