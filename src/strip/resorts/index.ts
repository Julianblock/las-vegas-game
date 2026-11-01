import type { Resort } from '../resort';
import { caesars } from './caesars';
import { flamingo } from './flamingo';

/** Every landmark module on the corridor, roughly south to north along the Boulevard, then Flamingo Road west. */
export const RESORTS: Resort[] = [
  flamingo,
  caesars,
];
