import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Terrible’s, the Herbst family’s Nevada gas stations, car washes and roadhouse casinos. */
export const terribles: Brand = {
  id: 'terribles',
  match: /^Terrible('s| Herbst)/,
  pole: 'fuel',
  color: '#111111',
  sign: panel('brand_terribles', {
    bg: '#ffd200',
    ink: '#d0202a',
    text: "TERRIBLE'S",
    sub: 'GAS · CAR WASH · STORE',
    trim: '#111111',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
