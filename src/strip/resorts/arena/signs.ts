import { neon, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

export const tmobileSign: SignSpec = {
  name: 'tmobileSign',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'T · Mobile ARENA', w / 2, h * 0.55, w * 0.94, (p) => `bold ${p}px ${GROTESK}`, h * 0.64, '#ff2aa0');
  },
};

/** The arena's east-face screen over Toshiba Plaza: Golden Knights, fights, concerts. */
export const arenaScreen: SignSpec = {
  name: 'arenaScreen',
  w: 768,
  h: 288,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#1a1a1a', '#8a7440'], head: 'VEGAS GOLDEN KNIGHTS', sub: 'TONIGHT 7PM · VS. KINGS', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#e8d090' },
      { bg: ['#000000', '#3a0a0a'], head: 'UFC 322', sub: 'SATURDAY · T-MOBILE ARENA', font: (p) => `900 italic ${p}px ${GROTESK}`, ink: '#ff2a2a' },
      { bg: ['#1a0a2a', '#ff2aa0'], head: 'T-MOBILE ARENA', sub: 'THE PARK · TOSHIBA PLAZA', font: (p) => `bold ${p}px ${GROTESK}` },
      { bg: ['#0a0a2a', '#2a3a9a'], head: 'GO KNIGHTS GO', sub: '2023 STANLEY CUP CHAMPIONS', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#e8d090' },
    ]);
  },
};
