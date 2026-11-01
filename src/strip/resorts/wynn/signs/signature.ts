import { neon, type SignSpec } from '../../../../world/signKit';
import { BRUSH } from '../../../paint/fonts';

/** Steve Wynn's signature, the logo scrawled across both crescents' crowns. */
export const wynnSignature: SignSpec = {
  name: 'wynnSignature',
  w: 1024,
  h: 320,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Wynn', w / 2, h * 0.56, w * 0.9, (p) => `${p}px ${BRUSH}`, h * 0.9, '#f4e2b4');
  },
};

export const encoreSignature: SignSpec = {
  name: 'encoreSignature',
  w: 1024,
  h: 320,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Encore', w / 2, h * 0.56, w * 0.94, (p) => `${p}px ${BRUSH}`, h * 0.78, '#f4e2b4');
  },
};
