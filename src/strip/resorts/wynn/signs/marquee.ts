import type { SignSpec } from '../../../../world/signKit';
import { BRUSH, DIDONE, GROTESK } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The twin LED faces of the Wynn's oval Strip pylon. */
export const wynnMarquee: SignSpec = {
  name: 'wynnMarquee',
  w: 512,
  h: 640,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#2a1a08', '#8a5a22'], head: 'Wynn', sub: 'LAS VEGAS', font: (p) => `${p}px ${BRUSH}`, ink: '#fff0c8' },
      { bg: ['#1a0612', '#6a1a3a'], head: 'Encore', sub: 'ENCORE BEACH CLUB', font: (p) => `${p}px ${BRUSH}`, ink: '#ffd8e8' },
      { bg: ['#06121a', '#1a4a6a'], head: 'Le Rêve', sub: 'AWAKENING', font: (p) => `italic ${p}px ${DIDONE}` },
      { bg: ['#0a0a0a', '#3a3a3a'], head: 'XS', sub: 'NIGHTCLUB', font: (p) => `bold ${p}px ${DIDONE}`, ink: '#f2c860' },
      { bg: ['#06180a', '#1a5a2a'], head: 'WYNN GOLF', sub: 'THE ONLY COURSE ON THE STRIP', font: (p) => `bold ${p}px ${GROTESK}` },
    ]);
  },
};
