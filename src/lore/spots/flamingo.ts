import type { Spot } from '../spot';
import { near } from '../tests';

export const flamingoSpot: Spot = {
  id: 'flamingo',
  kind: 'lore',
  kicker: 'The Flamingo · 1946',
  title: 'Bugsy’s fabulous Flamingo',
  text: 'Benjamin “Bugsy” Siegel opened the Flamingo the day after Christmas 1946, months late and millions over budget, with mob money. It flopped, closed and reopened. Six months later Siegel was shot dead in Beverly Hills. The casino he dreamed up is the oldest still running on the Strip.',
  at: { x: 1650, z: -40 },
  hint: 'Fly over the pink neon at Flamingo and the Strip.',
  r: 260,
  h: 90,
  test: near({ x: 1650, z: -40 }, 120, 80),
};
