import type { Resort } from '../../resort';
import { buildPlatinum } from './build';
import { platinumWord } from './signs';
import { platinumStyle } from './style';

export const platinum: Resort = {
  id: 'platinum',
  name: 'The Platinum Hotel',
  signs: [platinumWord],
  style: platinumStyle,
  build: buildPlatinum,
};
