import type { Spot } from '../spot';
import { near } from '../tests';

export const goldenTikiSpot: Spot = {
  id: 'golden-tiki',
  kind: 'lore',
  kicker: 'The Golden Tiki · Spring Mountain',
  title: 'Shrunken heads in Chinatown',
  text: 'The Golden Tiki opened in 2015 in a Chinatown strip mall. Inside are shrunken heads, a pirate skeleton at the bar, and a giant clamshell booth.',
  at: { x: -206, z: -1123 },
  hint: 'Look in the strip malls along Spring Mountain Road.',
  r: 150,
  h: 50,
  test: near({ x: -206, z: -1123 }, 110, 50),
};
