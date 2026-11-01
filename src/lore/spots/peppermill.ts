import type { Spot } from '../spot';
import { near } from '../tests';

export const peppermillSpot: Spot = {
  id: 'peppermill',
  kind: 'lore',
  kicker: 'Peppermill · 1972',
  title: 'The fireside lounge',
  text: 'Neon purple and blue, fake cherry blossoms, and a fire pit sitting in a pool of water. The Peppermill has served giant breakfasts around the clock since 1972 and turns up in Casino and Showgirls.',
  at: { x: 2419, z: -1961 },
  hint: 'Drop down on the Strip opposite the Fontainebleau.',
  r: 160,
  h: 50,
  test: near({ x: 2419, z: -1961 }, 120, 50),
};
