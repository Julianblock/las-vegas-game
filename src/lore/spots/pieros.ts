import type { Spot } from '../spot';
import { near } from '../tests';

export const pierosSpot: Spot = {
  id: 'pieros',
  kind: 'lore',
  kicker: 'Piero’s · 1982',
  title: 'A booth for Lefty',
  text: 'A dark, clubby Italian restaurant off the Strip where the bosses ate. Frank Rosenthal, the man behind Casino, had his own table, and Scorsese shot scenes here.',
  at: { x: 3058, z: -1776 },
  hint: 'On Convention Center Drive, east of the Strip.',
  r: 160,
  h: 50,
  test: near({ x: 3058, z: -1776 }, 120, 50),
};
