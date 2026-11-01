import type { Resort } from '../../strip/resort';
import { JackOLanterns } from './lanterns';

/** Halloween on the Strip: pumpkins at the doors through late October. */
export const halloween: Resort = {
  id: 'halloween',
  name: 'Halloween',
  shows: (hf) => [new JackOLanterns(hf)],
};
