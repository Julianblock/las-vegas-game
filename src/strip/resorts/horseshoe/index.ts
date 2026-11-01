import type { Resort } from '../../resort';
import { buildBazaar } from './bazaar';
import { buildHorseshoe } from './build';
import { HORSESHOE_SIGNS } from './signs';
import { horseshoeStyle } from './style';

export const horseshoe: Resort = {
  id: 'horseshoe',
  name: 'Horseshoe Las Vegas',
  signs: HORSESHOE_SIGNS,
  style: horseshoeStyle,
  build(k) {
    buildHorseshoe(k);
    buildBazaar(k);
  },
};
