import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Tacos El Gordo, Tijuana-style tacos with lines out the door past midnight. */
export const tacosElGordo: Brand = {
  id: 'tacosElGordo',
  match: /^Tacos El Gordo/,
  pole: 'tall',
  color: '#d0202a',
  free: true,
  sign: panel('brand_tacosElGordo', {
    bg: '#d0202a',
    ink: '#ffd200',
    text: 'TACOS EL GORDO',
    sub: 'ESTILO TIJUANA',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
