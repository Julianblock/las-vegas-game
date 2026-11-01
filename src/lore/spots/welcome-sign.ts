import type { Spot } from '../spot';
import { near } from '../tests';

export const welcomeSignSpot: Spot = {
  id: 'welcome-sign',
  kind: 'lore',
  kicker: 'Welcome to Fabulous Las Vegas · 1959',
  title: 'Never copyrighted',
  text: 'Betty Willis drew the sign in 1959 and gave the design to the city as a gift, so anyone may print it. The silver dollars behind each letter are a nod to Nevada’s nickname, the Silver State. It stands in the median south of Mandalay Bay, with a parking lot for the photo queue.',
  at: { x: 1551, z: 3766 },
  hint: 'Fly down the Strip past Mandalay Bay to the sign in the median.',
  r: 120,
  h: 35,
  test: near({ x: 1551, z: 3766 }, 60, 35),
};
