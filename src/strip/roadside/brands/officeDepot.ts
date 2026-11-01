import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Office Depot. */
export const officeDepot: Brand = {
  id: 'officeDepot',
  match: /^Office Depot/,
  pole: 'tall',
  color: '#cc0000',
  sign: panel('brand_officeDepot', {
    bg: '#cc0000',
    ink: '#ffffff',
    text: 'Office DEPOT',
    sub: 'OfficeMax',
    trim: '#ffffff',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
