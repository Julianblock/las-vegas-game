import type { Resort } from '../../resort';
import { arcade } from './arcade';
import { pylon } from './pylon';
import { ROWS } from './rows';
import { commercialCenterBoard, commercialCenterName } from './signs';

/** Commercial Center (1963), the open-air plaza on East Sahara, marked by its pylon. */
export const commercialCenter: Resort = {
  id: 'commercialCenter',
  name: 'Commercial Center',
  signs: [commercialCenterName, commercialCenterBoard],
  build: (k) => {
    pylon(k, 4497, -3084);
    for (const r of ROWS) arcade(k, r);
  },
};
