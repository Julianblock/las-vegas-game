import type { SignSpec } from '../../../world/signKit';
import type { Resort } from '../../resort';
import { buildLaConcha } from './laConcha';
import { PIECES } from './pieces';
import { boneyardFrame } from './site';

/** The Neon Museum (2012): the Boneyard of retired signs and the La Concha lobby. */
export const neonMuseum: Resort = {
  id: 'neonMuseum',
  name: 'The Neon Museum',
  signs: PIECES.flatMap((p) => (p.sign ? [p.sign] : [])) as SignSpec[],
  build: (k) => {
    buildLaConcha(k);
    const fr = boneyardFrame(k);
    k.box(fr, 2, -0.35, 0, 50, 0.4, 62, '#9a8a72', { rough: 1 });
    for (const p of PIECES) p.build(k, fr);
    k.walk(fr, [[-24, -30], [-14, -10], [-2, 6], [12, 20], [0, 30]]);
  },
};
