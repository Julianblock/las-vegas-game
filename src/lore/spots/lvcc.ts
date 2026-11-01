import type { Spot } from '../spot';
import { near } from '../tests';

export const lvccSpot: Spot = {
  id: 'lvcc',
  kind: 'lore',
  kicker: 'Las Vegas Convention Center · 1959',
  title: 'The town that sells to the world',
  text: 'The convention centre opened in 1959 under a silver dome. Now CES fills its halls every January, and since 2021 Teslas carry visitors between them through the Boring Company’s Loop tunnels under the parking lots.',
  at: { x: 3441, z: -1609 },
  hint: 'Fly over the huge halls east of the Strip.',
  r: 340,
  h: 100,
  test: near({ x: 3441, z: -1609 }, 260, 100),
};
