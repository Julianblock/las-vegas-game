import type { Spot } from '../spot';
import { near } from '../tests';

export const cosmopolitanSpot: Spot = {
  id: 'cosmopolitan',
  kind: 'lore',
  kicker: 'The Cosmopolitan · 2010',
  title: 'Just the right amount of wrong',
  text: 'A pair of glass towers squeezed onto 8.5 acres beside Bellagio. Every room has a balcony, rare on the Strip, and inside a three-storey bar sits within a chandelier of two million crystals.',
  at: { x: 1400, z: 650 },
  hint: 'Fly past the balconied towers next to Bellagio.',
  r: 240,
  h: 100,
  test: near({ x: 1400, z: 650 }, 120, 120),
};
