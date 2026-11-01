import type { Resort } from '../../strip/resort';
import { Race } from './race';
import { plazaStyle } from './style';
import { TrackSurface } from './surface';
import { CircuitWalls } from './walls';

/** The Las Vegas Grand Prix: the Strip becomes a street circuit in November. */
export const grandPrix: Resort = {
  id: 'grand-prix',
  name: 'Las Vegas Grand Prix',
  style: plazaStyle,
  shows: (hf) => [new CircuitWalls(hf), new Race(hf)],
};
