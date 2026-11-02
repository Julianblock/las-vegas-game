import type { Resort } from '../../strip/resort';
import { Firecrackers } from './crackers';
import { LunarLanterns } from './lanterns';
import { LionDance } from './lions';

/** Lunar New Year in Chinatown: lanterns down Spring Mountain, lion dancers and firecrackers at the plaza. */
export const lunarNewYear: Resort = {
  id: 'lunar-new-year',
  name: 'Lunar New Year',
  shows: (hf) => [new LunarLanterns(hf), new LionDance(hf), new Firecrackers(hf)],
};
