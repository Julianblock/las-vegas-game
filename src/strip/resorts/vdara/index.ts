import type { Resort } from '../../resort';
import { buildVdara } from './build';
import { vdaraWord } from './signs';
import { vdaraStyle } from './style';

/** Vdara, CityCenter's no-casino, no-smoking all-suite tower. */
export const vdara: Resort = {
  id: 'vdara',
  name: 'Vdara',
  signs: [vdaraWord],
  style: vdaraStyle,
  build: buildVdara,
};
