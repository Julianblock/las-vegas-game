import type { Spot } from '../spot';
import { near } from '../tests';

export const pennTellerSpot: Spot = {
  id: 'penn-teller',
  kind: 'lore',
  kicker: 'Penn & Teller · The Rio',
  title: 'Hello after the show',
  text: 'Penn & Teller have played the Rio since 2001. After every show the pair stand in the lobby to shake hands and sign anything the crowd brings, and Teller still doesn’t say a word on stage.',
  at: { x: 170, z: 120 },
  hint: 'Find the theatre on the Flamingo side of the Rio.',
  r: 90,
  h: 50,
  test: near({ x: 170, z: 120 }, 50, 50),
};
