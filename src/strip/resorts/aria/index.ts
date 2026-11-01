import type { Resort } from '../../resort';
import { buildCrowns } from './crowns';
import { ariaCrown, vdaraCrown } from './signs/crown';
import { ariaStyle } from './style';

export const aria: Resort = {
  id: 'aria',
  name: 'Aria and Vdara',
  signs: [ariaCrown, vdaraCrown],
  style: ariaStyle,
  build: buildCrowns,
};
