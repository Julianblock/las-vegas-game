import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** An independent bookshop with an artificial bird sanctuary. */
export const writersBlock: Brand = {
  id: 'writersBlock',
  match: /^Writer's Block$/,
  pole: 'monument',
  color: '#1a1a1a',
  sign: panel('brand_writersBlock', {
    bg: '#f0e8dc',
    ink: '#1a1a1a',
    text: 'The Writer\'s Block',
    sub: 'BOOKS',
    trim: '#1a1a1a',
    font: (p) => `bold ${p}px ${SERIF}`,
  }),
};
