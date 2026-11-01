import { rect, type Haunt } from './haunt';

/** The Luxor’s night shift. */
export const luxor: Haunt = {
  id: 'ghost-luxor',
  kind: 'secret',
  kicker: 'Luxor · after dark',
  title: 'Workers under the pyramid',
  text: 'Construction crews on the Luxor talked about accidents on the job, and the stories never stopped once the beam went on. Housekeepers on the inclinators tell of figures in hard hats walking the sphinx forecourt at shift change, heading in.',
  ground: rect(1400, 2215, 1462, 2290),
  count: 2,
  hint: 'Come down in front of the Luxor sphinx after dark.',
  r: 80,
  h: 22,
};
