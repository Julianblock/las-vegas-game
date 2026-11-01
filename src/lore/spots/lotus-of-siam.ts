import type { Spot } from '../spot';
import { near } from '../tests';

export const lotusOfSiamSpot: Spot = {
  id: 'lotus-of-siam',
  kind: 'lore',
  kicker: 'Lotus of Siam · East Flamingo Road',
  title: 'The best Thai food in America',
  text: 'For decades this was a strip-mall restaurant on Sahara that critics drove across the country to eat at, famous for northern Thai dishes and a huge German wine list. After a flood in 2017 it reopened here on East Flamingo Road.',
  at: { x: 3630, z: 92 },
  hint: 'Fly east along Flamingo Road past Paradise.',
  r: 160,
  h: 50,
  test: near({ x: 3630, z: 92 }, 120, 50),
};
