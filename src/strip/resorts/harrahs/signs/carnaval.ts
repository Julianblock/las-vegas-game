import { type SignSpec } from '../../../../world/signKit';
import { DECO } from '../../../paint/fonts';
import { letters } from '../../../paint/letters';
import { bulbBorder } from '../../../paint/marquee';

/** Carnaval Court's bulb-ringed arch board over the Strip entrance. */
export const carnavalSign: SignSpec = {
  name: 'carnavalSign',
  w: 768,
  h: 160,
  frames: 2,
  draw(g, w, h, frame) {
    g.fillStyle = '#2a0a3a';
    g.fillRect(0, 0, w, h);
    letters(g, 'CARNAVAL COURT', w, h, (p) => `bold ${p}px ${DECO}`, '#ffd84a', '#7a1a8a', '#ff9a2a');
    bulbBorder(g, 6, 6, w - 12, h - 12, 18, '#fff2c0', '#5a3a2a', frame);
  },
};
