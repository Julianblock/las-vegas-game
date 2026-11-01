import { fitText, type SignSpec } from '../../../../world/signKit';
import { BLACK } from '../../../../world/signKit';

/** Hoarding banner: the Hard Rock roundel and the opening date. */
export const hardRockBanner: SignSpec = {
  name: 'hardRockBanner',
  w: 768,
  h: 96,
  draw(g, w, h) {
    g.fillStyle = '#0c0c0c';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#d8a43a';
    g.beginPath();
    g.arc(h * 0.6, h / 2, h * 0.4, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#0c0c0c';
    fitText(g, 'HR', h * 0.6, h * 0.52, h * 0.6, (p) => `900 ${p}px ${BLACK}`, h * 0.36);
    g.fillStyle = '#ffffff';
    fitText(g, 'HARD ROCK LAS VEGAS · OPENING 2027', w * 0.56, h * 0.52, w * 0.78, (p) => `900 ${p}px ${BLACK}`, h * 0.4);
  },
};
