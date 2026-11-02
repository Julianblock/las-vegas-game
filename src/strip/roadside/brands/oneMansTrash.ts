import type { Brand } from '../brand';
import { panel } from '../panel';

/** Antiques on Main Street. */
export const oneMansTrash: Brand = {
  id: 'oneMansTrash',
  match: /^One Man's Trash$/,
  pole: 'monument',
  color: '#3a2a1a',
  sign: panel('brand_oneMansTrash', {
    bg: '#f0e0c0',
    ink: '#5a3a1a',
    text: 'One Man\'s Trash',
    sub: 'ANTIQUES · VINTAGE',
    trim: '#5a3a1a',
  }),
};
