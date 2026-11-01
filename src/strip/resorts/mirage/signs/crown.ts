import { neon, type SignSpec } from '../../../../world/signKit';
import { BLACK } from '../../../../world/signKit';

/** The new crown letters going up where MIRAGE hung for 35 years. */
export const hardRockCrown: SignSpec = {
  name: 'hardRockCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'HARD ROCK', w / 2, h * 0.52, w * 0.94, (p) => `900 ${p}px ${BLACK}`, h * 0.7, '#e8b04a');
  },
};
