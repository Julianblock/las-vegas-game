import type { Spot } from '../spot';
import { near } from '../tests';

export const slotzillaSpot: Spot = {
  id: 'slotzilla',
  kind: 'lore',
  kicker: 'SlotZilla · Fremont Street',
  title: 'Flying under the canopy',
  text: 'Since 2014 riders have launched from a twelve-storey slot machine at the east end of the Fremont Street canopy and flown its length on ziplines, some of them lying flat like Superman.',
  at: { x: 4334, z: -5978 },
  hint: 'Find the giant slot machine at the east end of the canopy.',
  r: 100,
  h: 50,
  test: near({ x: 4334, z: -5978 }, 60, 50),
};
