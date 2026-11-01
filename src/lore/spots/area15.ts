import type { Spot } from '../spot';
import { near } from '../tests';

export const area15Spot: Spot = {
  id: 'area15',
  kind: 'lore',
  kicker: 'Area15 · 2020',
  title: 'Omega Mart',
  text: 'A windowless warehouse by the freeway full of immersive art, with a giant astronaut out front. Inside, Meow Wolf’s Omega Mart looks like a supermarket until you open the fridge doors.',
  at: { x: 766, z: -1815 },
  hint: 'Fly west across the freeway from the Strip, by Desert Inn Road.',
  r: 180,
  h: 50,
  test: near({ x: 766, z: -1815 }, 140, 50),
};
