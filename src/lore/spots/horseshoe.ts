import type { Spot } from '../spot';
import { near } from '../tests';

export const horseshoeSpot: Spot = {
  id: 'horseshoe',
  kind: 'lore',
  kicker: 'Horseshoe, once MGM Grand · 1973',
  title: 'The fire that changed the code',
  text: 'Kirk Kerkorian built this as the first MGM Grand, the biggest hotel in the world. On 21 November 1980 a fire in a deli swept through the casino; 85 people died, most of them from smoke on the floors above. Sprinklers and smoke alarms in every high-rise in the country followed. It became Bally’s in 1986 and the Horseshoe in 2022.',
  at: { x: 1680, z: 260 },
  hint: 'Fly low past the tower on the southeast corner of Flamingo and the Strip.',
  r: 260,
  h: 100,
  test: near({ x: 1680, z: 260 }, 140, 90),
};
