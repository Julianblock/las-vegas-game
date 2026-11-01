import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Hofbräuhaus Las Vegas beer hall. */
export const hofbrauhaus: Brand = {
  id: 'hofbrauhaus',
  match: /^Hofbr/,
  pole: 'tall',
  color: '#1a4a9a',
  free: true,
  sign: panel('brand_hofbrauhaus', {
    bg: '#ffffff',
    ink: '#1a4a9a',
    text: 'HOFBRÄUHAUS',
    sub: 'LAS VEGAS',
    trim: '#1a4a9a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
