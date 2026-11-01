import type { Resort } from '../strip/resort';
import { Jets } from './jets';

/** The sky over the Strip: airliners in and out of Harry Reid International. */
export const airport: Resort = {
  id: 'airport',
  name: 'Harry Reid International Airport',
  shows: (hf) => [new Jets(hf)],
};
