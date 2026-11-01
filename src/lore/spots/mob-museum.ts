import type { Spot } from '../spot';
import { near } from '../tests';

export const mobMuseumSpot: Spot = {
  id: 'mob-museum',
  kind: 'lore',
  kicker: 'The Mob Museum · 1933 courthouse',
  title: 'Where the Senate came to town',
  text: 'In November 1950 Senator Estes Kefauver brought his hearings on organised crime to this federal courthouse and post office. It reopened in 2012 as a museum of the mob and the lawmen who chased it.',
  at: { x: 4397, z: -6323 },
  hint: 'Look for the neoclassical stone building north of Fremont Street.',
  r: 140,
  h: 60,
  test: near({ x: 4397, z: -6323 }, 90, 60),
};
