import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, GROTESK } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** PLANET HOLLYWOOD in white capitals with an electric-blue halo. */
export const phCrown: SignSpec = {
  name: 'phCrown',
  w: 1024,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'PLANET HOLLYWOOD', w / 2, h * 0.56, w * 0.94, (p) => `900 ${p}px ${GROTESK}`, h * 0.66, '#7ab8ff');
  },
};

/** The tall video walls on the front towers, cycling shows and shops. */
export const phWall: SignSpec = {
  name: 'phWall',
  w: 384,
  h: 640,
  frames: 5,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#06122a', '#1a5ab0'], head: 'PH', sub: 'PLANET HOLLYWOOD', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#2a0610', '#c02040'], head: 'BAKKT', sub: 'THEATER · LIVE TONIGHT', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#1a1a1a', '#6a5a2a'], head: 'MIRACLE', sub: 'MILE SHOPS', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a0a0a', '#a04a10'], head: 'BOO!', sub: 'HAPPY HALLOWEEN', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ffb030' },
      { bg: ['#200a2a', '#7a2a9a'], head: 'STARS', sub: 'ARE MADE HERE', font: (p) => `900 ${p}px ${GROTESK}` },
    ]);
  },
};

export const phLED: SignSpec = {
  name: 'phLED',
  w: 640,
  h: 352,
  frames: 4,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#06122a', '#1a5ab0'], head: 'PLANET HOLLYWOOD', sub: 'LAS VEGAS', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#2a1606', '#b0702a'], head: 'GORDON RAMSAY', sub: 'BURGER', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a1a10', '#2a7a4a'], head: 'MIRACLE MILE', sub: '170 SHOPS & RESTAURANTS', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#0a0a0a', '#a04a10'], head: 'HAPPY HALLOWEEN', sub: 'COSTUME PARTY TONIGHT', font: (p) => `900 ${p}px ${GROTESK}`, ink: '#ffb030' },
    ]);
  },
};
