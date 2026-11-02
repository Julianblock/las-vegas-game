import type { Spot } from '../spot';
import { near } from '../tests';

export const evelPieSpot: Spot = {
  id: 'evel-pie',
  kind: 'lore',
  kicker: 'Evel Pie · Fremont East',
  title: 'The daredevil’s pizza parlour',
  text: 'Evel Pie is decked out in Evel Knievel memorabilia: jumpsuits, posters and a replica of his rocket-powered Skycycle. Knievel jumped the Caesars Palace fountains on New Year’s Eve 1967, crashed on landing, and woke up from a coma a month later.',
  at: { x: 4496, z: -5912 },
  hint: 'Find the pizza place on Fremont East.',
  r: 150,
  h: 50,
  test: near({ x: 4496, z: -5912 }, 110, 50),
};
