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
  { name: 'The LINQ', z: -400, side: 1, n: 8 },
  { name: 'Harrah\'s', z: -690, side: 1, n: 5 },
  { name: 'Venetian', z: -920, side: 1, n: 9 },
  { name: 'Mirage', z: -650, side: -1, n: 6 },
  { name: 'Treasure Island', z: -1100, side: -1, n: 6 },
  { name: 'Wynn', z: -1420, side: 1, n: 7 },
  { name: 'Fashion Show', z: -1300, side: -1, n: 5 },
  { name: 'Cosmopolitan', z: 720, side: -1, n: 7 },
  { name: 'Planet Hollywood', z: 640, side: 1, n: 8 },
  { name: 'Aria', z: 1000, side: -1, n: 6 },
  { name: 'MGM Grand', z: 1720, side: 1, n: 9 },
  { name: 'New York-New York', z: 1760, side: -1, n: 7 },
  { name: 'Excalibur', z: 2050, side: -1, n: 8 },
];
