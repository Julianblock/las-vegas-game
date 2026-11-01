import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Battista’s Hole in the Wall (1970): free wine and an accordion player, steps off the Strip. */
export const battistas: Brand = {
  id: 'battistas',
  match: /^Battista/,
  pole: 'tall',
  color: '#2a5a1a',
  sign: panel('brand_battistas', {
    bg: '#1a5a2a',
    ink: '#ffffff',
    text: 'Battista’s',
    sub: 'HOLE IN THE WALL · SINCE 1970',
    trim: '#e8202a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
