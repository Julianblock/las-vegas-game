import type { Spot } from '../spot';
import { near } from '../tests';

export const cromwellSpot: Spot = {
  id: 'cromwell',
  kind: 'lore',
  kicker: 'The Cromwell · 1979',
  title: 'Barbary Coast',
  text: 'The smallest casino on the Four Corners began as Michael Gaughan’s Barbary Coast, all Victorian stained glass. It became Bill’s Gamblin’ Hall in 2007 and the Cromwell in 2014, with Drai’s pool club on the roof.',
  at: { x: 1590, z: 110 },
  hint: 'Find the little casino on the northeast corner of Flamingo and the Strip.',
  r: 160,
  h: 60,
  test: near({ x: 1590, z: 110 }, 60, 60),
};
