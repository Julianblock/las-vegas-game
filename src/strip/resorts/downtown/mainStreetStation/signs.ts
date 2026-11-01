import { neon, SERIF, type SignSpec } from '../../../../world/signKit';

/** Main Street Station in neon across the top of the tower. */
export const mainStreetStationName: SignSpec = {
  name: 'mainStreetStationName',
  w: 768,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'MAIN STREET STATION', w / 2, h * 0.55, w * 0.92, (p) => `700 ${p}px ${SERIF}`, h * 0.66, '#ffd27a');
  },
};
