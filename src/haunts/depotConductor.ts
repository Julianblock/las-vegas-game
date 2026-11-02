import { rect, type Haunt } from './haunt';

/** A conductor still calling the last train. */
export const depotConductor: Haunt = {
  id: 'ghost-depotConductor',
  kind: 'secret',
  kicker: 'The Plaza · Main and Fremont',
  title: 'All aboard for Los Angeles',
  text: 'Las Vegas began as a railroad stop, and the Union Pacific depot stood at the head of Fremont Street until the Union Plaza replaced it in 1971. Amtrak trains still stopped at a platform behind the hotel until 1997. Late at night a man in a railroad cap walks the casino floor calling for Los Angeles, and vanishes at the back doors.',
  ground: rect(3870, -6245, 3915, -6200),
  count: 1,
  hint: 'Hover at the head of Fremont Street after dark.',
  r: 55,
  h: 16,
};
