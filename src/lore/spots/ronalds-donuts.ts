import type { Spot } from '../spot';
import { near } from '../tests';

export const ronaldsDonutsSpot: Spot = {
  id: 'ronalds-donuts',
  kind: 'lore',
  kicker: 'Ronald’s Donuts · Spring Mountain',
  title: 'The vegan doughnut',
  text: 'Ronald’s has fried doughnuts in a Chinatown strip mall for decades, and every one is vegan. Its apple fritters have their own following.',
  at: { x: -1282, z: -1169 },
  hint: 'Look in the strip malls along Spring Mountain Road.',
  r: 150,
  h: 50,
  test: near({ x: -1282, z: -1169 }, 110, 50),
};
