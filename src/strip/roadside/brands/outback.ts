import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Outback Steakhouse. */
export const outback: Brand = {
  id: 'outback',
  match: /^Outback Steakhouse$/,
  pole: 'tall',
  color: '#6a2a0a',
  sign: panel('brand_outback', {
    bg: '#8a2a0a',
    ink: '#ffe8c8',
    text: 'Outback',
    sub: 'STEAKHOUSE',
    trim: '#ffe8c8',
    font: (p) => `900 italic ${p}px ${SERIF}`,
  }),
};
