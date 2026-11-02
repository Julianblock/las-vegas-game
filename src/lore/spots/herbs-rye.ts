import type { Spot } from '../spot';
import { near } from '../tests';

export const herbsRyeSpot: Spot = {
  id: 'herbs-rye',
  kind: 'lore',
  kicker: 'Herbs & Rye · West Sahara',
  title: 'Pre-Prohibition cocktails',
  text: 'Herbs & Rye serves steaks and cocktails from before Prohibition, sorted on the menu by era. Its late happy hour is aimed at bartenders and dealers just off shift on the Strip.',
  at: { x: -156, z: -3104 },
  hint: 'Find the cocktail bar on Sahara west of the freeway.',
  r: 150,
  h: 50,
  test: near({ x: -156, z: -3104 }, 110, 50),
};
