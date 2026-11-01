import type { Resort } from '../../resort';
import { buildCrowns } from './crowns';
import { buildMarquee } from './marquee';
import { palmsCrown } from './signs/crown';
import { palmsLED } from './signs/led';
import { buildSkytube } from './skytube';
import { palmsStyle } from './style';

export const palms: Resort = {
  id: 'palms',
  name: 'Palms',
  signs: [palmsCrown, palmsLED],
  style: palmsStyle,
  build(k) {
    buildCrowns(k);
    buildSkytube(k);
    buildMarquee(k);
  },
};
