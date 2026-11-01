import { rect, type Haunt } from './haunt';

/** The Apache’s guests. */
export const apache: Haunt = {
  id: 'ghost-apache',
  kind: 'secret',
  kicker: 'Binion’s · after dark',
  title: 'Room service at the Apache',
  text: 'The Hotel Apache opened on Fremont in 1932 with the first elevator in Las Vegas. Benny Binion took it over, and its rooms sit above his casino still. Guests leave notes about a woman in 1930s clothes in the corridor, and a man in a Stetson who stands at the Fremont door until the canopy lights up.',
  ground: rect(4098, -6226, 4146, -6184),
  count: 2,
  hint: 'Hover outside the Hotel Apache on Fremont Street after dark.',
  r: 60,
  h: 16,
};
