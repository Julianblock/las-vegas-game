import { fitText, type SignSpec } from '../../../world/signKit';
import { GROTESK } from '../../paint/fonts';

/** The hoarding banner round the site: green and gold, opening day 2028. */
export const ballparkBanner: SignSpec = {
  name: 'ballparkBanner',
  w: 768,
  h: 96,
  draw(g, w, h) {
    g.fillStyle = '#003831';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#efb21e';
    g.fillRect(0, h * 0.86, w, h * 0.14);
    fitText(g, 'ATHLETICS · LAS VEGAS BALLPARK · OPENING 2028', w / 2, h * 0.45, w * 0.92, (p) => `900 ${p}px ${GROTESK}`, h * 0.42);
  },
};
