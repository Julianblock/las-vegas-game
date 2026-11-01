import type { Spot } from '../spot';
import { near } from '../tests';

export const rioSpot: Spot = {
  id: 'rio',
  kind: 'lore',
  kicker: 'Rio · 1990',
  title: 'Carnival on the wrong side of the freeway',
  text: 'Anthony Marnell’s all-suite Rio wrapped its towers in red and blue glass and hung a parade of floats from the Masquerade Village ceiling. For seventeen summers it hosted the World Series of Poker, and riders still zip between its towers from the VooDoo deck 50 storeys up.',
  at: { x: 300, z: -30 },
  hint: 'Circle the red and blue glass towers just west of I-15.',
  r: 300,
  h: 140,
  test: near({ x: 300, z: -30 }, 200, 160),
};
