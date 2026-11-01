import { neon, type SignSpec } from '../../../world/signKit';
import { CONDENSED, GROTESK, ROMAN } from '../../paint/fonts';
import { slides } from '../../paint/screen';

/** RESORTS WORLD in white over the copper glass, with its red swoosh. */
export const rwCrown: SignSpec = {
  name: 'rwCrown',
  w: 1024,
  h: 192,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'RESORTS WORLD', w / 2, h * 0.52, w * 0.92, (p) => `600 ${p}px ${GROTESK}`, h * 0.58, '#ffffff');
    g.strokeStyle = '#ff2a3a';
    g.lineWidth = h * 0.05;
    g.beginPath();
    g.moveTo(w * 0.1, h * 0.86);
    g.quadraticCurveTo(w * 0.5, h * 0.7, w * 0.9, h * 0.86);
    g.stroke();
  },
};

/**
 * The 100,000 sq ft LED skin wrapped round the tower base facing the Strip,
 * the largest on the boulevard when it opened in 2021.
 */
export const rwScreen: SignSpec = {
  name: 'rwScreen',
  w: 1024,
  h: 512,
  frames: 6,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#3a0006', '#d8202a'], head: 'RESORTS WORLD', sub: 'LAS VEGAS', font: (p) => `600 ${p}px ${GROTESK}` },
      { bg: ['#000814', '#0a3a8a'], head: 'ZOUK', sub: 'NIGHTCLUB · AYU DAYCLUB', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#7ae8ff' },
      { bg: ['#140a00', '#8a5a10'], head: 'CROCKFORDS', sub: 'LAS VEGAS · LXR', font: (p) => `${p}px ${ROMAN}`, ink: '#ffe8b0' },
      { bg: ['#1a0016', '#b0207a'], head: 'KATY PERRY', sub: 'LIVE AT THE THEATRE', font: (p) => `900 ${p}px ${GROTESK}` },
      { bg: ['#001a10', '#0a8a5a'], head: 'FAMOUS FOODS', sub: 'STREET EATS', font: (p) => `900 ${p}px ${CONDENSED}` },
      { bg: ['#000000', '#3a0a0a'], head: 'HAPPY HALLOWEEN', sub: 'OCTOBER 31', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ff8a1a' },
    ]);
  },
};

export const rwLED: SignSpec = {
  name: 'rwLED',
  w: 640,
  h: 352,
  frames: 3,
  draw(g, w, h, frame) {
    slides(g, w, h, frame, [
      { bg: ['#3a0006', '#d8202a'], head: 'RESORTS WORLD', sub: 'HILTON · CONRAD · CROCKFORDS', font: (p) => `600 ${p}px ${GROTESK}` },
      { bg: ['#000814', '#0a3a8a'], head: 'ZOUK', sub: 'TONIGHT', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#7ae8ff' },
      { bg: ['#000000', '#3a0a0a'], head: 'HALLOWEEN', sub: 'COSTUME PARTY', font: (p) => `900 ${p}px ${CONDENSED}`, ink: '#ff8a1a' },
    ]);
  },
};
