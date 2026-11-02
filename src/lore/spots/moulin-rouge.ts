import type { Spot } from '../spot';
import { near } from '../tests';

export const moulinRougeSpot: Spot = {
  id: 'moulin-rouge',
  kind: 'lore',
  kicker: 'Moulin Rouge · 1955',
  title: 'Everyone welcome',
  text: 'The Moulin Rouge opened in May 1955 as the first integrated hotel-casino in Las Vegas, when the Strip turned Black guests away at the door. Its 2:30 a.m. third show packed the room with Strip headliners. It closed within six months, but in March 1960 civil-rights leaders met here and won an agreement opening the casinos to everyone.',
  at: { x: 2960, z: -6950 },
  hint: 'Find the empty lot on Bonanza Road in the Historic Westside.',
  r: 160,
  h: 50,
  test: near({ x: 2960, z: -6950 }, 120, 50),
};
