import type { Spot } from '../spot';
import { near } from '../tests';

export const frankiesTikiSpot: Spot = {
  id: 'frankies-tiki',
  kind: 'lore',
  kicker: 'Frankie’s Tiki Room · West Charleston',
  title: 'Never closes, never gets light',
  text: 'Frankie’s opened in 2008 and has never closed its doors. Its rum drinks come in custom mugs carved by tiki artists, and there are no windows, so it’s always midnight in Polynesia.',
  at: { x: 2281, z: -4789 },
  hint: 'Look for the tiki bar on Charleston west of the freeway.',
  r: 150,
  h: 50,
  test: near({ x: 2281, z: -4789 }, 110, 50),
};
