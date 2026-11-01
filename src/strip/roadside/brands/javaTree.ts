import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** The Java Tree, a drive-up coffee hut. */
export const javaTree: Brand = {
  id: 'javaTree',
  match: /^The Java Tree$/,
  pole: 'monument',
  color: '#3a2a1a',
  free: true,
  sign: panel('brand_javaTree', {
    bg: '#2a1a0e',
    ink: '#e8c890',
    text: 'The Java Tree',
    sub: 'COFFEE · TEA',
    trim: '#7ab04a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
