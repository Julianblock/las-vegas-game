import type { Resort } from '../../strip/resort';
import { isFourthOfJuly } from '../calendar';
import { Fireworks } from '../newyear/fireworks';
import { today } from '../today';
import { JULY4_ROOFTOPS } from './rooftops';

/** Independence Day: fireworks over the Strip, the Rio and downtown. */
export const fourthOfJuly: Resort = {
  id: 'fourth-of-july',
  name: 'Fourth of July',
  shows: (hf) => [new Fireworks(hf, JULY4_ROOFTOPS, () => isFourthOfJuly(today.month, today.day, today.hours), 1776)],
};
