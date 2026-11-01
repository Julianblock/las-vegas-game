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
];
