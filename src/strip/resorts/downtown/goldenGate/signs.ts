import { neon, SERIF, type SignSpec } from '../../../../world/signKit';

/** Golden Gate Hotel & Casino in neon across the top of the tower. */
export const goldenGateName: SignSpec = {
  name: 'goldenGateName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Golden Gate', w / 2, h * 0.55, w * 0.92, (p) => `italic 700 ${p}px ${SERIF}`, h * 0.66, '#ff4a3a');
  },
};
