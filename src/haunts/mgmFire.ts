import { rect, type Haunt } from './haunt';

/** The fire at the old MGM Grand. */
export const mgmFire: Haunt = {
  id: 'ghost-mgm-fire',
  kind: 'secret',
  kicker: 'Horseshoe · after dark',
  title: 'Smoke on the stairwells',
  text: 'Before it was Bally’s or the Horseshoe, this tower on the corner of Flamingo was the MGM Grand. On November 21, 1980 an electrical fault in a deli started the second deadliest hotel fire in American history; 85 people died, most from smoke on the upper floors. Guests still report knocking in the stairwells, and shapes on the plaza that look up at the tower.',
  ground: rect(1660, 200, 1702, 292),
  count: 4,
  hint: 'Fly past the front of the Horseshoe on the Flamingo corner after dark.',
  r: 80,
  h: 24,
};
