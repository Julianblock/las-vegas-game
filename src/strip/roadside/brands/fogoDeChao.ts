import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Fogo de Chão Brazilian steakhouse. */
export const fogoDeChao: Brand = {
  id: 'fogoDeChao',
  match: /^Fogo de Ch/,
  pole: 'monument',
  color: '#111111',
  sign: panel('brand_fogoDeChao', {
    bg: '#111111',
    ink: '#ffffff',
    text: 'FOGO DE CHÃO',
    sub: 'BRAZILIAN STEAKHOUSE',
    trim: '#c8102e',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
