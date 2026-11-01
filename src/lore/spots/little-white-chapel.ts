import type { Spot } from '../spot';
import { near } from '../tests';

export const littleWhiteChapelSpot: Spot = {
  id: 'little-white-chapel',
  kind: 'lore',
  kicker: 'Little White Chapel',
  title: 'Fifty-five hours',
  text: 'Britney Spears married a childhood friend here at 5.30 in the morning in January 2004; the marriage was annulled 55 hours later. Since 1991 couples have been able to marry without leaving their car, through the Tunnel of Love drive-up window.',
  at: { x: 3659, z: -4347 },
  hint: 'Fly north of the Strat, along the old wedding row of Las Vegas Boulevard.',
  r: 140,
  h: 50,
  test: near({ x: 3659, z: -4347 }, 80, 50),
};
