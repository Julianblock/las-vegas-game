import { fitText, type SignSpec } from '../../../../world/signKit';
import { DIDONE, GROTESK } from '../../../paint/fonts';

function anchor(name: string, text: string, font: (p: number) => string, ink = '#ffffff'): SignSpec {
  return {
    name,
    w: 768,
    h: 128,
    cutout: true,
    draw(g, w, h) {
      g.shadowColor = ink;
      g.shadowBlur = h * 0.08;
      g.fillStyle = ink;
      fitText(g, text, w / 2, h * 0.54, w * 0.94, font, h * 0.7);
    },
  };
}

/** Department-store nameplates on the mall's Strip-facing boxes. */
export const fashionShowSign = anchor('fashionShowSign', 'FASHION SHOW', (p) => `300 ${p}px ${GROTESK}`);
export const nordstromSign = anchor('nordstromSign', 'NORDSTROM', (p) => `${p}px ${DIDONE}`);
export const neimanSign = anchor('neimanSign', 'Neiman Marcus', (p) => `italic ${p}px ${DIDONE}`);
export const macysSign = anchor('macysSign', 'macy’s ★', (p) => `bold ${p}px ${GROTESK}`, '#ff3030');
