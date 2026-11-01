import type { Resort } from '../../resort';
import { buildCloud } from './cloud';
import { buildMall } from './mall';
import { fashionShowSign, macysSign, neimanSign, nordstromSign } from './signs/anchors';
import { cloudScreen } from './signs/screens';

export const fashionShow: Resort = {
  id: 'fashionShow',
  name: 'Fashion Show',
  signs: [cloudScreen, fashionShowSign, nordstromSign, neimanSign, macysSign],
  build(k) {
    buildMall(k);
    buildCloud(k);
  },
};
