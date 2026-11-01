import type { Spot } from '../spot';
import { near } from '../tests';

export const citycenterSpot: Spot = {
  id: 'citycenter',
  kind: 'lore',
  kicker: 'CityCenter · 2009',
  title: 'The tower that came down',
  text: 'Around nine billion dollars of glass: Aria, Vdara, the leaning Veer Towers and Crystals. One tower, the Harmon, never opened. Builders found the steel in its walls placed wrong; it was capped at 26 floors and taken apart floor by floor in 2015.',
  at: { x: 1150, z: 830 },
  hint: 'Fly into the cluster of curved glass towers between Bellagio and Park MGM.',
  r: 360,
  h: 140,
  test: near({ x: 1150, z: 830 }, 200, 160),
};
