import { type SignSpec } from '../../../../world/signKit';
import { SERIF } from '../../../../world/signKit';
import { letters } from '../../../paint/letters';

/** GOLD COAST in gilded serif capitals, the slab's Flamingo face. */
export const goldCoastCrown: SignSpec = {
  name: 'goldCoastCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    letters(g, 'GOLD COAST', w, h, (p) => `bold ${p}px ${SERIF}`, '#ffd23a', '#7a4a0a', '#ffb000');
  },
};
