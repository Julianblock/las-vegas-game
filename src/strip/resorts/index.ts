import type { Resort } from '../resort';
import { linq } from './linq';
import { paris } from './paris';
import { vanderpump } from './vanderpump';
import { horseshoe } from './horseshoe';
import { bellagio } from './bellagio';
import { caesars } from './caesars';
import { flamingo } from './flamingo';

/** Every landmark module on the corridor, roughly south to north along the Boulevard, then Flamingo Road west. */
export const RESORTS: Resort[] = [
  flamingo,
  caesars,
  bellagio,
  horseshoe,
  vanderpump,
  paris,
  linq,
];
