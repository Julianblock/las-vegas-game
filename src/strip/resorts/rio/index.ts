import type { Resort } from '../../resort';
import { buildCrowns } from './crowns';
import { buildEntrance } from './entrance';
import { buildRooftop } from './rooftop';
import { rioCrown } from './signs/crown';
import { rioLED } from './signs/led';
import { voodooSign } from './signs/voodoo';
import { rioStyle } from './style';

export const rio: Resort = {
  id: 'rio',
  name: 'Rio',
  signs: [rioCrown, rioLED, voodooSign],
  style: rioStyle,
  build(k) {
    buildCrowns(k);
    buildRooftop(k);
    buildEntrance(k);
  },
};
