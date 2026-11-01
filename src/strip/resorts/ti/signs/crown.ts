import { neon, type SignSpec } from '../../../../world/signKit';
import { SERIF } from '../../../../world/signKit';

/** The two red letters the resort shrank to in 2003, dropping "Treasure Island". */
export const tiCrown: SignSpec = {
  name: 'tiCrown',
  w: 512,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'TI', w / 2, h * 0.54, w * 0.8, (p) => `bold ${p}px ${SERIF}`, h * 0.86, '#ff2a1e');
  },
};
