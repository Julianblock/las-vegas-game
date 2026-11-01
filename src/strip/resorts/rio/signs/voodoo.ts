import { neon, type SignSpec } from '../../../../world/signKit';
import { DIDONE } from '../../../paint/fonts';

/** The rooftop lounge's green script, seen from the whole valley. */
export const voodooSign: SignSpec = {
  name: 'voodooSign',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'VooDoo', w / 2, h * 0.56, w * 0.9, (p) => `italic bold ${p}px ${DIDONE}`, h * 0.8, '#7aff4a');
  },
};
