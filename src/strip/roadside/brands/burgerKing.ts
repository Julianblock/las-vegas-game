import { ROUND } from '../../paint/fonts';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The bun-sandwiched wordmark on cream. */
export const burgerKing: Brand = {
  id: 'burgerKing',
  match: /^Burger King$/,
  pole: 'tall',
  color: '#d62300',
  sign: panel('brand_burgerKing', {
    bg: '#f5ebdc',
    ink: '#d62300',
    text: 'BURGER KING',
    trim: '#502314',
    font: (p) => `900 ${p}px ${ROUND}`,
  }),
};
