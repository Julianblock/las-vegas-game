import { SCRIPT } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Rum cocktails and reggae. */
export const jammyland: Brand = {
  id: 'jammyland',
  match: /^Jammyland$/,
  pole: 'monument',
  color: '#1a3a1a',
  sign: panel('brand_jammyland', {
    bg: '#1a1a1a',
    ink: '#ffd400',
    text: 'Jammyland',
    sub: 'COCKTAILS · REGGAE',
    trim: '#1a9a3a',
    font: (p) => `bold ${p}px ${SCRIPT}`,
  }),
};
