import type { Spot } from '../spot';
import { aloft } from '../tests';

export const stratTopSpot: Spot = {
  id: 'strat-top',
  kind: 'secret',
  kicker: 'The Strat · the top',
  title: 'Above the Big Shot',
  text: 'You perched on the pod 260 metres up, higher than any rider on the Big Shot. The SkyJump cables run past below you.',
  at: { x: 3003, z: -3507 },
  hint: 'Land on the pod at the top of the Strat.',
  r: 120,
  h: 60,
  test: aloft({ x: 3003, z: -3507 }, 30, 255, 300),
};
