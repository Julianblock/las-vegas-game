import type { SignSpec } from '../../../../world/signKit';
import { CONDENSED, SLAB } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The roadside marquee: bingo, bowling and a cheap steak, the locals' rotation. */
export const goldCoastLED: SignSpec = {
  name: 'goldCoastLED',
  w: 640,
  h: 352,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#4a2a00', '#c88a10'], head: 'GOLD COAST', sub: 'HOTEL & CASINO', font: (p) => `bold ${p}px ${SLAB}` },
      { bg: ['#0a1a3a', '#1a4a9a'], head: 'BINGO', sub: 'SESSIONS DAILY 9AM–11PM', font: (p) => `900 ${p}px ${SLAB}`, ink: '#ffe23a' },
      { bg: ['#1a0a0a', '#6a1a1a'], head: '70 LANES', sub: 'BOWLING CENTER · OPEN 24 HRS', font: (p) => `bold ${p}px ${CONDENSED}` },
      { bg: ['#0a1a0a', '#1a5a1a'], head: '$1,000,000', sub: 'HALLOWEEN SLOT TOURNAMENT', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ffe23a' },
      { bg: ['#2a1a0a', '#5a3a1a'], head: 'PRIME RIB $14.99', sub: 'PALM BREEZE CAFE', font: (p) => `bold ${p}px ${SLAB}` },
    ]);
  },
};
