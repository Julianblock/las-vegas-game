import type { Spot } from '../spot';
import { near } from '../tests';

export const chinatownSpot: Spot = {
  id: 'chinatown',
  kind: 'lore',
  kicker: 'Chinatown Plaza · 1995',
  title: 'A Chinatown built on purpose',
  text: 'James Chen opened Chinatown Plaza on Spring Mountain Road in 1995, a Tang-style shopping centre with a statue of the Monkey King’s monk Xuanzang at its gate. Three miles of noodle shops, hot pot, boba and karaoke grew up around it.',
  at: { x: -571, z: -1076 },
  hint: 'Follow Spring Mountain Road west of I-15 to the plaza with the tiled gate.',
  r: 200,
  h: 70,
  test: near({ x: -571, z: -1076 }, 120, 70),
};
