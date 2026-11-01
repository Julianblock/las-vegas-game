import type { Spot } from '../spot';
import { near } from '../tests';

export const saharaSpot: Spot = {
  id: 'sahara',
  kind: 'lore',
  kicker: 'Sahara · 1952',
  title: 'The Beatles slept here',
  text: 'The Sahara’s camels and Congo Room marked the north end of the Strip for decades. In August 1964 the Beatles stayed here before their convention centre show. It was the SLS for a few years, and went back to the Sahara in 2019.',
  at: { x: 2980, z: -2890 },
  hint: 'Fly over the cream towers at Sahara Avenue.',
  r: 280,
  h: 100,
  test: near({ x: 2980, z: -2890 }, 170, 120),
};
