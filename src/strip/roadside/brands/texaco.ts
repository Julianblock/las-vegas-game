import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Texaco. */
export const texaco: Brand = {
  id: 'texaco',
  match: /^Texaco/,
  pole: 'fuel',
  color: '#c8102e',
  sign: panel('brand_texaco', {
    bg: '#111111',
    ink: '#ffffff',
    text: 'TEXACO',
    trim: '#c8102e',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
