import type { Resort } from '../../resort';
import { buildTuscany } from './build';
import { tuscanyCrown, tuscanyLED } from './signs';
import { tuscanyStyle } from './style';

export const tuscany: Resort = {
  id: 'tuscany',
  name: 'Tuscany Suites & Casino',
  signs: [tuscanyCrown, tuscanyLED],
  style: tuscanyStyle,
  build: buildTuscany,
};
