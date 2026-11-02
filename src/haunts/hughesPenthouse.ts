import { rect, type Haunt } from './haunt';

/** Howard Hughes, still watching from the top floor. */
export const hughesPenthouse: Haunt = {
  id: 'ghost-hughesPenthouse',
  kind: 'secret',
  kicker: 'The Desert Inn site · Las Vegas Blvd',
  title: 'The man behind the blackout curtains',
  text: 'Howard Hughes arrived at the Desert Inn on a stretcher in November 1966 and did not leave his ninth-floor penthouse for four years, buying hotel after hotel by phone. He left on Thanksgiving Eve 1970 the way he came, on a stretcher, for the Bahamas. Wynn now stands on the site, but gardeners on the night shift swear a thin, long-haired figure stands at a dark window high above them.',
  ground: rect(2135, -1275, 2190, -1225),
  count: 1,
  hint: 'Hover high over the Wynn after midnight.',
  r: 60,
  h: 60,
};
