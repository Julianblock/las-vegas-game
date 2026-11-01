import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palmRow } from '../../parts/palm';
import type { Resort } from '../../resort';
import { allegiantName, raidersWord } from './signs';
import { allegiantStyle } from './style';
import { davisTorch } from './torch';

/**
 * Allegiant Stadium, home of the Raiders since 2020: its name and the team's
 * across the glass facing the Strip, and Al Davis's torch out on the plaza.
 */
function buildAllegiant(k: Kit) {
  const east = k.frame(694, 2795, 90);
  k.sign(east, 'allegiantName', 0, 58, 0, 4.5, 1.3, FX.NEON);
  k.sign(east, 'raidersWord', 0, 40, 0, 6, 1.2, FX.NEON);
  const plaza = k.frame(700, 2700, 90);
  davisTorch(k, plaza, 0, 0);
  palmRow(k, plaza, -30, 8, 60, 8, 12, 11);
}

export const allegiant: Resort = {
  id: 'allegiant',
  name: 'Allegiant Stadium',
  signs: [allegiantName, raidersWord],
  style: allegiantStyle,
  build: buildAllegiant,
};
