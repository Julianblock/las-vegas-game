import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Village Pub, a local tavern chain with video poker at every seat. */
export const villagePub: Brand = {
  id: 'villagePub',
  match: /^Village Pub$/,
  pole: 'monument',
  color: '#3a1a0a',
  free: true,
  sign: panel('brand_villagePub', {
    bg: '#3a1a0a',
    ink: '#ffd27a',
    text: 'VILLAGE PUB',
    sub: 'GAMING · FOOD · SPIRITS',
    trim: '#ffd27a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
