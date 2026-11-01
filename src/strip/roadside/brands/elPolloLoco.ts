import { SANS } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** El Pollo Loco, fire-grilled chicken. */
export const elPolloLoco: Brand = {
  id: 'elPolloLoco',
  match: /^El Pollo Loco/,
  pole: 'tall',
  color: '#e8501a',
  sign: panel('brand_elPolloLoco', {
    bg: '#e8501a',
    ink: '#ffd200',
    text: 'El Pollo Loco',
    sub: 'FIRE-GRILLED CHICKEN',
    trim: '#ffd200',
    font: (p) => `900 italic ${p}px ${SANS}`,
  }),
};
