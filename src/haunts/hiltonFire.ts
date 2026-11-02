import { rect, type Haunt } from './haunt';

/** The Hilton fire of 1981. */
export const hiltonFire: Haunt = {
  id: 'ghost-hiltonFire',
  kind: 'secret',
  kicker: 'The Westgate · Paradise Road',
  title: 'Smoke on the ninth floor',
  text: 'Three months after the MGM Grand fire, on 10 February 1981, a busboy set fires in the Las Vegas Hilton’s east tower. Eight people died, most of them overcome by smoke in the lift lobbies, and he went to prison for life. Night housekeepers still talk of a lift that opens on floors nobody called and smells of smoke.',
  ground: rect(3340, -2265, 3395, -2210),
  count: 2,
  hint: 'Hover by the Westgate’s towers late at night.',
  r: 60,
  h: 40,
};
