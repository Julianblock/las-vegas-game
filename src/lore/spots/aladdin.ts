import type { Spot } from '../spot';
import { near } from '../tests';

export const aladdinSpot: Spot = {
  id: 'aladdin',
  kind: 'lore',
  kicker: 'Planet Hollywood, once the Aladdin · 1966',
  title: 'The King’s wedding',
  text: 'Elvis Presley married Priscilla Beaulieu in a suite at the Aladdin on 1 May 1967, in a ceremony that lasted eight minutes. The old Aladdin was imploded in 1998; its rebuilt successor became Planet Hollywood in 2007.',
  at: { x: 1697, z: 663 },
  hint: 'Fly past the tower east of the Strip across from Cosmopolitan.',
  r: 240,
  h: 100,
  test: near({ x: 1697, z: 663 }, 120, 120),
};
