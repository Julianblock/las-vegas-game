import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** FedEx Office print and ship centres. */
export const fedexOffice: Brand = {
  id: 'fedexOffice',
  match: /^FedEx/,
  pole: 'monument',
  color: '#4d148c',
  sign: panel('brand_fedexOffice', {
    bg: '#ffffff',
    ink: '#4d148c',
    text: 'FedEx Office',
    sub: 'PRINT & SHIP CENTER',
    trim: '#ff6600',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
