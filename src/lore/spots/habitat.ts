import type { Spot } from '../spot';
import { near } from '../tests';

export const habitatSpot: Spot = {
  id: 'habitat',
  kind: 'lore',
  kicker: 'Flamingo Wildlife Habitat',
  title: 'Real flamingos',
  text: 'Behind the casino, Chilean flamingos wade in a garden of ponds with koi, turtles and pelicans. Next to the wedding chapel a small stone plaque remembers Siegel, and guests swear his ghost still walks the garden after dark.',
  at: { x: 1705, z: -90 },
  hint: 'Drop into the garden behind the Flamingo.',
  r: 90,
  h: 30,
  test: near({ x: 1705, z: -90 }, 50, 30),
};
