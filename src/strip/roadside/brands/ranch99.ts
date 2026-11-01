import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** 99 Ranch Market in Chinatown. */
export const ranch99: Brand = {
  id: 'ranch99',
  match: /^99 Ranch/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_ranch99', {
    bg: '#c8102e',
    ink: '#ffffff',
    text: '99 RANCH',
    sub: 'MARKET',
    trim: '#ffcc33',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
