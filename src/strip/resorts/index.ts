import type { Resort } from '../resort';
import { rio } from './rio';
import { harrahs } from './harrahs';
import { fashionShow } from './fashionShow';
import { wynn } from './wynn';
import { ti } from './ti';
import { mirage } from './mirage';
import { venetian } from './venetian';
import { sphere } from './sphere';
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
  sphere,
  venetian,
  mirage,
  ti,
  wynn,
  fashionShow,
  harrahs,
  rio,
];
