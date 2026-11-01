import { SERIF, type SignSpec } from '../../../../world/signKit';
import { BRUSH, GROTESK, SLAB } from '../../../paint/fonts';
import { slides } from '../../../paint/screen';

/** The Strip marquee's rotation. */
export const harrahsLED: SignSpec = {
  name: 'harrahsLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#3a0610', '#a01a22'], head: 'Harrah’s', sub: 'LAS VEGAS', font: (p) => `bold italic ${p}px ${SERIF}`, ink: '#ffe0a0' },
      { bg: ['#2a0a3a', '#7a1a8a'], head: 'CARNAVAL COURT', sub: 'LIVE MUSIC · FLAIR BARTENDERS', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ffd84a' },
      { bg: ['#101010', '#3a3a3a'], head: 'Piano Bar', sub: 'DUELING PIANOS NIGHTLY', font: (p) => `${p}px ${BRUSH}` },
      { bg: ['#1a1206', '#6a4a12'], head: 'MAC KING', sub: 'COMEDY MAGIC SHOW', font: (p) => `900 ${p}px ${SLAB}`, ink: '#ffcc33' },
    ]);
  },
};
