import type { Resort } from '../../resort';
import { buildCampanile } from './campanile';
import { buildVenetianCrowns } from './crowns';
import { buildDoge } from './doge';
import { Gondolas } from './gondolas';
import { buildPiazza } from './piazza';
import { buildRialto } from './rialto';
import { VENETIAN_SIGNS } from './signs';
import { venetianStyle } from './style';

export const venetian: Resort = {
  id: 'venetian',
  name: 'The Venetian & The Palazzo',
  signs: VENETIAN_SIGNS,
  style: venetianStyle,
  build(k) {
    buildCampanile(k);
    buildDoge(k);
    buildRialto(k);
    buildPiazza(k);
    buildVenetianCrowns(k);
  },
  replaces: (m) => m.name === 'The Campanile',
  shows: (hf, water) => [new Gondolas(hf, water)],
};
