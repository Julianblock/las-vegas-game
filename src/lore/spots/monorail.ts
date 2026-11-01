import type { Spot } from '../spot';
import { near } from '../tests';

export const monorailSpot: Spot = {
  id: 'monorail',
  kind: 'lore',
  kicker: 'Las Vegas Monorail · 2004',
  title: 'Disney’s hand-me-downs',
  text: 'The line began in 1995 as a short monorail between the MGM Grand and Bally’s, running secondhand trains from Walt Disney World. It was rebuilt and stretched to the convention centre and the Sahara in 2004, running behind the hotels on the east side of the Strip.',
  at: { x: 2113, z: 278 },
  hint: 'Find the elevated track behind the Horseshoe and Paris.',
  r: 140,
  h: 60,
  test: near({ x: 2113, z: 278 }, 90, 60),
};
