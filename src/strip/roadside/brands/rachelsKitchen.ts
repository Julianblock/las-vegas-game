import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Rachel’s Kitchen, a Las Vegas fresh café chain. */
export const rachelsKitchen: Brand = {
  id: 'rachelsKitchen',
  match: /^Rachel's Kitchen/,
  pole: 'monument',
  color: '#2a6a2a',
  free: true,
  sign: panel('brand_rachelsKitchen', {
    bg: '#ffffff',
    ink: '#2a6a2a',
    text: "Rachel's Kitchen",
    trim: '#2a6a2a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
