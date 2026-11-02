import { fitText, SANS, type SignSpec } from '../../../../world/signKit';
import { ADS } from './ads';

/** A 14 × 48 ft bulletin face, cycling through the ads. */
export const billboardFace: SignSpec = {
  name: 'billboardFace',
  w: 768,
  h: 224,
  frames: ADS.length,
  draw(g, w, h, f) {
    const a = ADS[f];
    g.fillStyle = a.bg;
    g.fillRect(0, 0, w, h);
    if (a.band) {
      g.fillStyle = a.band;
      g.fillRect(0, h * 0.68, w, h * 0.06);
    }
    g.fillStyle = a.ink;
    fitText(g, a.head, w / 2, h * 0.36, w * 0.92, (p) => `900 ${p}px ${SANS}`, h * 0.42);
    fitText(g, a.sub, w / 2, h * 0.86, w * 0.9, (p) => `bold ${p}px ${SANS}`, h * 0.13);
  },
};
