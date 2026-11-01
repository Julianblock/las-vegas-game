import type { Spot } from '../spot';
import { nightNear } from '../tests';

export const fountainsSpot: Spot = {
  id: 'fountains',
  kind: 'secret',
  kicker: 'Bellagio · after dark',
  title: 'Time to say goodbye',
  text: 'Every fifteen minutes after dark the lake erupts in time to the music, shooters throwing water nearly 140 metres into the air. Pull up on the rail, like everyone else, and watch the whole show.',
  at: { x: 1450, z: 360 },
  hint: 'Hover low over Bellagio’s lake after dark.',
  r: 260,
  h: 60,
  night: true,
  test: nightNear({ x: 1450, z: 360 }, 130, 30),
};
