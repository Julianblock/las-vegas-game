import type { Spot } from '../spot';
import { near } from '../tests';

export const brahmaShrineSpot: Spot = {
  id: 'brahma-shrine',
  kind: 'lore',
  kicker: 'Caesars Palace · the Strip forecourt',
  title: 'The Four-Faced Brahma',
  text: 'Since 1984 a copy of Bangkok’s Erawan Shrine has stood at the front of Caesars Palace. Gamblers, many of them from Thailand and China, leave flowers, incense and fruit and pray to the four-faced Brahma for luck before going inside.',
  at: { x: 1485, z: 28 },
  hint: 'Look in front of Caesars Palace on the Strip.',
  r: 110,
  h: 50,
  test: near({ x: 1485, z: 28 }, 70, 50),
};
