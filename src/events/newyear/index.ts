import type { Resort } from '../../strip/resort';
import { Fireworks } from './fireworks';

/** New Year's Eve on the Strip: fireworks from the rooftops. */
export const newYear: Resort = {
  id: 'new-year',
  name: "New Year's Eve",
  shows: (hf) => [new Fireworks(hf)],
};
