import type { Spot } from '../spot';
import { near } from '../tests';

export const bonanzaGiftSpot: Spot = {
  id: 'bonanza-gift',
  kind: 'lore',
  kicker: 'Bonanza Gift Shop',
  title: 'The world’s largest gift shop',
  text: 'Forty thousand square feet of dice clocks, Elvis glasses and shot glasses, across from the Sahara, open late every night since 1980.',
  at: { x: 2893, z: -3135 },
  hint: 'Look on the Strip just south of Sahara Avenue.',
  r: 160,
  h: 50,
  test: near({ x: 2893, z: -3135 }, 120, 50),
};
