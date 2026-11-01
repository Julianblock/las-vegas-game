import type { Resort } from '../../resort';
import { buildBridge } from './bridge';
import { buildFrontage } from './frontage';
import { buildLiberty } from './liberty';
import { nynyCrown, nynyLED } from './signs';
import { nynyStyle } from './style';

export const nyny: Resort = {
  id: 'nyny',
  name: 'New York-New York',
  signs: [nynyCrown, nynyLED],
  style: nynyStyle,
  build(k) {
    buildLiberty(k);
    buildBridge(k);
    buildFrontage(k);
  },
};
