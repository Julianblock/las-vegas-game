import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The pecten's yellow and red. */
export const shell: Brand = {
  id: 'shell',
  match: /^Shell$/,
  pole: 'fuel',
  color: '#ffd500',
  sign: panel('brand_shell', {
    bg: '#ffd500',
    ink: '#dd1d21',
    text: 'Shell',
    trim: '#dd1d21',
    font: (p) => `bold ${p}px ${SANS}`,
  }),
};
