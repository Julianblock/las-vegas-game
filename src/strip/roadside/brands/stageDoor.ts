import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Stage Door, a dive casino and bar behind the Flamingo with $3 beers. */
export const stageDoor: Brand = {
  id: 'stageDoor',
  match: /^Stage Door/,
  pole: 'tall',
  color: '#8a1a1a',
  sign: panel('brand_stageDoor', {
    bg: '#111111',
    ink: '#ff3a3a',
    text: 'STAGE DOOR',
    sub: 'CASINO · BAR · OPEN 24 HRS',
    trim: '#ffd040',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
