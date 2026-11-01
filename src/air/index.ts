import type { Resort } from '../strip/resort';
import { Helicopters } from './helicopters';
import { Jets } from './jets';

/** The sky over the Strip: airliners in and out of Harry Reid International
 * and tour helicopters circling the Strip. */
export const airport: Resort = {
  id: 'airport',
  name: 'Harry Reid International Airport',
  shows: (hf) => [new Jets(hf), new Helicopters(hf)],
};
