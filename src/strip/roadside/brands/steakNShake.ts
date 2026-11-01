import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Steak ’n Shake. */
export const steakNShake: Brand = {
  id: 'steakNShake',
  match: /^Steak 'n Shake/,
  pole: 'tall',
  color: '#111111',
  sign: panel('brand_steakNShake', {
    bg: '#ffffff',
    ink: '#111111',
    text: 'STEAK n SHAKE',
    sub: 'FAMOUS FOR STEAKBURGERS',
    trim: '#d0202a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
