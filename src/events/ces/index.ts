import type { Resort } from '../../strip/resort';
import { CesBanner } from './banner';

/** CES week at the convention centre: the banner goes up; the crowd joins the people in main. */
export const ces: Resort = {
  id: 'ces',
  name: 'CES',
  shows: (hf) => [new CesBanner(hf)],
};
