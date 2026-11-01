import type { Resort } from '../../resort';
import { buildBand } from './band';
import { buildCarnaval } from './carnaval';
import { buildCrowns } from './crowns';
import { buildFacade } from './facade';
import { carnavalSign } from './signs/carnaval';
import { harrahsCrown } from './signs/crown';
import { harrahsLED } from './signs/led';
import { harrahsStyle } from './style';

export const harrahs: Resort = {
  id: 'harrahs',
  name: 'Harrah’s',
  signs: [harrahsCrown, harrahsLED, carnavalSign],
  style: harrahsStyle,
  build(k) {
    buildCrowns(k);
    buildFacade(k);
    buildBand(k);
    buildCarnaval(k);
  },
};
