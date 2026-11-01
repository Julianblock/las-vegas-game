import type { Resort } from '../../strip/resort';
import { plazaStyle } from './style';
import { CircuitWalls } from './walls';

/** The Las Vegas Grand Prix: the Strip becomes a street circuit in November. */
export const grandPrix: Resort = {
  id: 'grand-prix',
  name: 'Las Vegas Grand Prix',
  shows: (hf) => [new CircuitWalls(hf)],
};
