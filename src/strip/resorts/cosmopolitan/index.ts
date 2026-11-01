import type { Resort } from '../../resort';
import { buildMarquee } from './marquee';
import { cosmoLED } from './signs/led';
import { cosmopolitanStyle } from './style';

export const cosmopolitan: Resort = {
  id: 'cosmopolitan',
  name: 'The Cosmopolitan',
  signs: [cosmoLED],
  style: cosmopolitanStyle,
  build: buildMarquee,
};
