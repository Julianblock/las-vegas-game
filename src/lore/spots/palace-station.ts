import type { Spot } from '../spot';
import { near } from '../tests';

export const palaceStationSpot: Spot = {
  id: 'palace-station',
  kind: 'lore',
  kicker: 'Palace Station · 2007',
  title: 'Room 1203',
  text: 'Palace Station began in 1976 as the Casino America, a railroad-themed joint by the freeway. In September 2007 O.J. Simpson and five men burst into room 1203 to take back sports memorabilia at gunpoint. He was sentenced to 33 years and served nine.',
  at: { x: 1381, z: -2960 },
  hint: 'Look by the freeway at Sahara Avenue.',
  r: 160,
  h: 50,
  test: near({ x: 1381, z: -2960 }, 120, 50),
};
