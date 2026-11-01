import { neon, SERIF, type SignSpec } from '../../../../world/signKit';

/** El Cortez in neon across the top of the tower. */
export const elCortezHotelName: SignSpec = {
  name: 'elCortezHotelName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'El Cortez', w / 2, h * 0.55, w * 0.92, (p) => `italic 700 ${p}px ${SERIF}`, h * 0.66, '#ff3a3a');
  },
};
