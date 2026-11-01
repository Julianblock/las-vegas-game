import { neon, type SignSpec } from '../../../../world/signKit';
import { GROTESK } from '../../../paint/fonts';

/** Binion’s Gambling Hall in neon across the top of the tower. */
export const binionsName: SignSpec = {
  name: 'binionsName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, "BINION'S", w / 2, h * 0.55, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#ff4a2a');
  },
};
