import type { Spot } from '../spot';
import { near } from '../tests';

export const kovalSpot: Spot = {
  id: 'koval',
  kind: 'lore',
  kicker: 'Flamingo Road & Koval Lane',
  title: '7 September 1996',
  text: 'Leaving the Tyson fight at the MGM Grand, Tupac Shakur was riding in Suge Knight’s BMW when a white Cadillac pulled up at this light and opened fire. He died six days later, at 25. In 2023, 27 years on, police finally charged a man with the murder.',
  at: { x: 2338, z: 165 },
  hint: 'Drive Flamingo Road east of the Strip to Koval Lane.',
  r: 140,
  h: 50,
  test: near({ x: 2338, z: 165 }, 50, 30),
};
