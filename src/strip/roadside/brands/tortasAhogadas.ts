import type { Brand } from '../brand';
import { panel } from '../panel';

/** Guadalajara drowned sandwiches and carnitas. */
export const tortasAhogadas: Brand = {
  id: 'tortasAhogadas',
  match: /^Carnitas y Tortas Ahogadas/,
  pole: 'monument',
  color: '#5a1a0a',
  free: true,
  sign: panel('brand_tortasAhogadas', {
    bg: '#f8e8c8',
    ink: '#8a1a0a',
    text: 'Tortas Ahogadas',
    sub: 'CARNITAS · GUADALAJARA',
    trim: '#2a6a2a',
  }),
};
