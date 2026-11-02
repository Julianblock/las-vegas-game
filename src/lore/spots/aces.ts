import type { Spot } from '../spot';
import { near } from '../tests';

export const acesSpot: Spot = {
  id: 'aces',
  kind: 'lore',
  kicker: 'The Aces · Mandalay Bay',
  title: 'Back-to-back',
  text: 'The WNBA’s Aces moved here from San Antonio in 2018 and play in the arena behind Mandalay Bay. They won the championship in 2022, the city’s first major title, and again in 2023, the first repeat champions in the league for twenty years.',
  at: { x: 1170, z: 2832 },
  hint: 'Look for the arena behind Mandalay Bay.',
  r: 120,
  h: 50,
  test: near({ x: 1170, z: 2832 }, 80, 50),
};
