import { CROSS } from '../../streets';

export interface Stop {
  x: number;
  /** +1 on the south kerb (eastbound), -1 on the north kerb (westbound). */
  side: number;
  /** Centre line to the back of the shelter (m). */
  off: number;
}

/** Far-side stops: eastbound just past each cross street, westbound just before it. */
const far = (x: number, off: number): Stop[] => [
  { x: x + 45, side: 1, off },
  { x: x - 45, side: -1, off },
];

/** The 202 Flamingo’s stops from Decatur to Paradise. */
export const STOPS: Stop[] = [
  ...far(CROSS.decatur, 17),
  ...far(CROSS.arville, 17),
  ...far(CROSS.wynn, 17),
  ...far(CROSS.valleyView, 19),
  ...far(CROSS.koval, 25),
  ...far(CROSS.hughesParkway, 25),
  ...far(CROSS.paradise, 25),
];
