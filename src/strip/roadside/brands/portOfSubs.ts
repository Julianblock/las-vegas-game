import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Port of Subs, Reno-born and all over Nevada. */
export const portOfSubs: Brand = {
  id: 'portOfSubs',
  match: /^Port of Subs$/,
  pole: 'tall',
  color: '#0a3a8a',
  sign: panel('brand_portOfSubs', {
    bg: '#ffffff',
    ink: '#0a3a8a',
    text: 'Port of Subs',
    sub: 'SUBS · SALADS',
    trim: '#d0202a',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
