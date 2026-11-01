import type { SignSpec } from '../../../../world/signKit';
import { DIDONE, GROTESK } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The giant LED screens slung under The Cloud's Strip edge. */
export const cloudScreen: SignSpec = {
  name: 'cloudScreen',
  w: 768,
  h: 384,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#f2f2f2', '#c8c8c8'], head: 'FASHION SHOW', sub: 'LAS VEGAS', font: (p) => `300 ${p}px ${GROTESK}`, ink: '#111111' },
      { bg: ['#140a1a', '#5a2a6a'], head: 'Nordstrom', font: (p) => `${p}px ${DIDONE}` },
      { bg: ['#1a0606', '#8a1414'], head: 'Macy’s', sub: '★ HALLOWEEN SALE', font: (p) => `bold ${p}px ${GROTESK}` },
      { bg: ['#0a0a0a', '#3a3a3a'], head: 'NEIMAN MARCUS', font: (p) => `${p}px ${DIDONE}` },
      { bg: ['#ff7a00', '#3a0a00'], head: 'TRICK OR TREAT', sub: 'OCT 31 · 4–7 PM · ALL LEVELS', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
