import { rect, type Haunt } from './haunt';

/** The courtroom that tried the mob. */
export const kefauver: Haunt = {
  id: 'ghost-kefauver',
  kind: 'secret',
  kicker: 'The Mob Museum · Stewart Avenue',
  title: 'Order in the court',
  text: 'The Mob Museum fills the 1933 federal courthouse where Senator Estes Kefauver brought his hearings on organised crime in November 1950. The courtroom is still upstairs. Night guards report footsteps on the gallery stairs and a gavel knocking in the empty room.',
  ground: rect(4372, -6340, 4422, -6300),
  count: 2,
  hint: 'Hover outside the old courthouse on Stewart Avenue after dark.',
  r: 60,
  h: 18,
};
