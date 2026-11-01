import type { Resort } from '../../resort';
import { buildGoldCoast } from './build';
import { goldCoastCrown } from './signs/crown';
import { goldCoastLED } from './signs/led';
import { goldCoastStyle } from './style';

export const goldCoast: Resort = {
  id: 'goldCoast',
  name: 'Gold Coast',
  signs: [goldCoastCrown, goldCoastLED],
  style: goldCoastStyle,
  build: buildGoldCoast,
};
