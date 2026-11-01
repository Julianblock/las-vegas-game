import type { Resort } from '../../resort';
import { buildCaesarsCrowns } from './crowns';
import { buildCaesarsDrive } from './drive';
import { buildCaesarsFrontage } from './frontage';
import { CAESARS_SIGNS } from './signs';
import { caesarsStyle } from './style';

export const caesars: Resort = {
  id: 'caesars',
  name: 'Caesars Palace',
  signs: CAESARS_SIGNS,
  style: caesarsStyle,
  build(k) {
    buildCaesarsDrive(k);
    buildCaesarsFrontage(k);
    buildCaesarsCrowns(k);
  },
};
