import type { Resort } from '../../resort';
import { FremontCanopy } from './canopy';
import { canopyColumns } from './columns';
import { buildContainerPark } from './containerPark';
import { buildMantis } from './mantis';
import { MantisFire } from './mantisFire';
import { buildPioneer } from './pioneer';
import { buildSlotzilla, slotzillaSign } from './slotzilla';
import { vegasVic } from './vic';

/** Fremont Street, downtown's five-block casino mall under the canopy. */
export const fremontStreet: Resort = {
  id: 'fremontStreet',
  name: 'Fremont Street Experience',
  signs: [vegasVic, slotzillaSign],
  build: (k) => {
    canopyColumns(k);
    buildPioneer(k);
    buildSlotzilla(k);
    buildContainerPark(k);
    buildMantis(k);
  },
  shows: (hf) => [new FremontCanopy(hf), new MantisFire(hf)],
};
