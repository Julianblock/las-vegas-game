import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Roberto’s Taco Shop, the late-night carne asada burrito of Las Vegas. */
export const robertos: Brand = {
  id: 'robertos',
  match: /^Roberto's/,
  pole: 'tall',
  color: '#2a8a2a',
  sign: panel('brand_robertos', {
    bg: '#ffd200',
    ink: '#c8202a',
    text: "ROBERTO'S",
    sub: 'TACO SHOP · OPEN 24 HRS',
    trim: '#2a8a2a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
