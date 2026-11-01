import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Egg Works, the Las Vegas breakfast chain with the yellow sign. */
export const eggWorks: Brand = {
  id: 'eggWorks',
  match: /^Egg Works/,
  pole: 'tall',
  color: '#c8202a',
  free: true,
  sign: panel('brand_eggWorks', {
    bg: '#ffd200',
    ink: '#111111',
    text: 'EGG WORKS',
    sub: 'BREAKFAST · LUNCH',
    trim: '#c8202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
