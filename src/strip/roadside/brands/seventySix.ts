import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The orange ball. */
export const seventySix: Brand = {
  id: 'seventySix',
  match: /^76$/,
  pole: 'fuel',
  color: '#f47b20',
  sign: panel('brand_seventySix', {
    bg: '#ffffff',
    ink: '#0a4a9a',
    text: '76',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
