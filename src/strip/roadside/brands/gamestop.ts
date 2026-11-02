import type { Brand } from '../brand';
import { panel } from '../panel';

/** Games in the strip mall. */
export const gamestop: Brand = {
  id: 'gamestop',
  match: /^GameStop$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_gamestop', {
    bg: '#1a1a1a',
    ink: '#ffffff',
    text: 'GAMESTOP',
    sub: 'POWER TO THE PLAYERS',
    trim: '#e01a1a',
  }),
};
