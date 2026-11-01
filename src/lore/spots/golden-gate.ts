import type { Spot } from '../spot';
import { near } from '../tests';

export const goldenGateSpot: Spot = {
  id: 'golden-gate',
  kind: 'lore',
  kicker: 'Golden Gate · 1906',
  title: 'The fifty-cent shrimp cocktail',
  text: 'The oldest hotel in Las Vegas opened as the Hotel Nevada a year after the town was founded, with the first telephone, number 1. From 1959 it sold a famous shrimp cocktail for fifty cents.',
  at: { x: 3935, z: -6121 },
  hint: 'At the west end of the Fremont Street canopy.',
  r: 160,
  h: 50,
  test: near({ x: 3935, z: -6121 }, 120, 50),
};
