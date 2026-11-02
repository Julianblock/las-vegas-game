import { rect, type Haunt } from './haunt';

/** The fire at the first resort. */
export const elRanchoFire: Haunt = {
  id: 'ghost-elRanchoFire',
  kind: 'secret',
  kicker: 'El Rancho Vegas · Sahara and the Strip',
  title: 'The showroom that burned',
  text: 'The El Rancho Vegas was the first resort on the Strip in 1941. On 17 June 1960 a fire started in the showroom and gutted the main building in a few hours. It was never rebuilt, and the corner sat empty for decades. People crossing the lot at night say they hear a dance band playing.',
  ground: rect(2780, -3110, 2880, -3010),
  count: 2,
  hint: 'Cross the empty corner at Sahara and the Strip after dark.',
  r: 70,
  h: 18,
};
