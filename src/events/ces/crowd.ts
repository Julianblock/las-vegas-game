import type { Crowd } from '../../life/people';
import { isCES } from '../calendar';
import { today } from '../today';

/**
 * CES badge-holders at the convention centre: streaming down the Paradise
 * Road frontage, across to West Hall, and along the south lots, with knots
 * at the doors and in the Loop queue.
 */
export function cesCrowd(): Crowd {
  return {
    walks: [
      [3190, -1960, 3190, -1800, 3190, -1650, 3190, -1500, 3190, -1350],
      [3135, -2200, 3135, -2050, 3135, -1900, 3160, -1880, 3190, -1880],
      [3200, -1335, 3400, -1335, 3600, -1335, 3880, -1335],
      [3205, -1650, 3260, -1600, 3320, -1560],
    ],
    spots: [
      { x: 3210, z: -1650, r: 18, n: 40 },
      { x: 3140, z: -1880, r: 15, n: 30 },
      { x: 3215, z: -1500, r: 14, n: 24 },
      { x: 3100, z: -1950, r: 10, n: 18 },
      { x: 3500, z: -1345, r: 12, n: 16 },
    ],
    day: 1,
    night: 0.15,
    cx: 3300,
    cz: -1650,
    radius: 650,
    when: () => isCES(today.month, today.day, today.hours),
  };
}
