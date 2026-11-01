import type { Resort } from '../../resort';
import { buildFlamingo } from './build';
import { buildHabitat } from './habitat';
import { FLAMINGO_SIGNS } from './signs';
import { flamingoStyle } from './style';

export const flamingo: Resort = {
  id: 'flamingo',
  name: 'Flamingo Las Vegas',
  signs: FLAMINGO_SIGNS,
  style: flamingoStyle,
  build(k) {
    buildFlamingo(k);
    buildHabitat(k);
  },
};
