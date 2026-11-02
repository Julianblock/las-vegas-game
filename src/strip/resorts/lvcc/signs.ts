import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** LAS VEGAS CONVENTION CENTER across the halls facing Paradise Road. */
export const lvccName: SignSpec = {
  name: 'lvccName',
  w: 1024,
  h: 112,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'LAS VEGAS CONVENTION CENTER', w / 2, h * 0.56, w * 0.96, (p) => `800 ${p}px ${GROTESK}`, h * 0.66, '#e8f4ff');
  },
};

/** The Paradise Road marquee, cycling the shows in town. */
export const lvccScreen: SignSpec = {
  name: 'lvccScreen',
  w: 640,
  h: 352,
  frames: 6,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#06202a', '#1a6a9a'], head: 'LVCC', sub: 'LAS VEGAS CONVENTION CENTER', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#0a0a12', '#3a3aaa'], head: 'CES', sub: 'JANUARY · ALL HALLS', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#1a0a06', '#c84a1a'], head: 'SEMA', sub: 'THE CAR SHOW · NOVEMBER', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#120a1a', '#6a2aa8'], head: 'NAB SHOW', sub: 'BROADCAST · APRIL · CENTRAL & NORTH', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#06180a', '#2a8a4a'], head: 'VEGAS LOOP', sub: 'RIDE THE TUNNELS · WEST STATION', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a1206', '#9a7a1a'], head: 'WELCOME', sub: 'EXHIBITORS · REGISTRATION OPEN', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};
