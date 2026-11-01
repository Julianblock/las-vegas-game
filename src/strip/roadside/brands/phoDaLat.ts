import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Pho Da Lat, one of the Vietnamese noodle houses along west Flamingo. */
export const phoDaLat: Brand = {
  id: 'phoDaLat',
  match: /^Pho Da Lat$/,
  pole: 'monument',
  color: '#8a1a1a',
  free: true,
  sign: panel('brand_phoDaLat', {
    bg: '#c8202a',
    ink: '#ffe23a',
    text: 'PHO DA LAT',
    sub: 'VIETNAMESE NOODLE SOUP',
    trim: '#ffe23a',
    font: (p) => `900 ${p}px ${SANS}`,
  }),
};
