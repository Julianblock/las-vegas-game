import type { Spot } from '../spot';
import { near } from '../tests';

export const grandPrixSpot: Spot = {
  id: 'grand-prix',
  kind: 'lore',
  kicker: 'Las Vegas Grand Prix · 2023',
  title: 'Eight minutes in',
  text: 'Formula 1 came back in November 2023 on a street circuit down the Strip, racing past the Bellagio fountains on a Saturday night. Eight minutes into first practice Carlos Sainz’s Ferrari hit a loose water-valve cover and the session was stopped. Max Verstappen won the race.',
  at: { x: 2530, z: 672 },
  hint: 'Find the long white pit building at Koval Lane and Harmon.',
  r: 220,
  h: 80,
  test: near({ x: 2530, z: 672 }, 150, 80),
};
