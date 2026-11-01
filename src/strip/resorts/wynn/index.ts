import type { Resort } from '../../resort';
import { buildEncoreTower } from './encore';
import { buildMarquee } from './marquee';
import { buildMountain } from './mountain';
import { lakeOfDreams } from './signs/lake';
import { wynnMarquee } from './signs/marquee';
import { encoreSignature, wynnSignature } from './signs/signature';
import { buildWynnTower } from './tower';

export const wynn: Resort = {
  id: 'wynn',
  name: 'Wynn and Encore',
  signs: [wynnSignature, encoreSignature, wynnMarquee, lakeOfDreams],
  build(k) {
    buildWynnTower(k);
    buildEncoreTower(k);
    buildMountain(k);
    buildMarquee(k);
  },
  replaces: (m) => m.name === 'Wynn Las Vegas' || m.name === 'Encore Las Vegas',
};
