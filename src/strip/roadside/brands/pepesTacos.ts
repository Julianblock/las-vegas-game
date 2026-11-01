import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pepe’s Tacos, a Las Vegas taqueria chain. */
export const pepesTacos: Brand = {
  id: 'pepesTacos',
  match: /^Pepe's Tacos/,
  pole: 'tall',
  color: '#2a8a2a',
  free: true,
  sign: panel('brand_pepesTacos', {
    bg: '#ffd200',
    ink: '#c8202a',
    text: "PEPE'S TACOS",
    trim: '#2a8a2a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
