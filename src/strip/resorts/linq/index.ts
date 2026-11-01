import type { Resort } from '../../resort';
import { buildLinq } from './build';
import { buildPromenade } from './promenade';
import { LINQ_SIGNS } from './signs';
import { linqStyle } from './style';
import { HighRollerWheel } from './wheel';

export const linq: Resort = {
  id: 'linq',
  name: 'The LINQ & High Roller',
  signs: LINQ_SIGNS,
  style: linqStyle,
  build(k) {
    buildLinq(k);
    buildPromenade(k);
  },
  shows: (hf) => [new HighRollerWheel(hf)],
};
