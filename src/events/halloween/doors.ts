/**
 * Where the jack-o'-lanterns pile up: resort entrances on the Strip.
 * `z` along the boulevard, `side` +1 east sidewalk, -1 west.
 */
export interface Door {
  name: string;
  z: number;
  side: 1 | -1;
  /** How many pumpkins in the pile. */
  n: number;
}

export const DOORS: Door[] = [
  { name: 'Bellagio', z: 300, side: -1, n: 9 },
  { name: 'Caesars Palace', z: -260, side: -1, n: 8 },
  { name: 'Horseshoe', z: 240, side: 1, n: 6 },
  { name: 'Paris', z: 450, side: 1, n: 7 },
  { name: 'Flamingo', z: -90, side: 1, n: 7 },
];
