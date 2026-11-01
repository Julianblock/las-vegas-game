import type { Spot } from '../spot';
import { near } from '../tests';

export const wynnSpot: Spot = {
  id: 'wynn',
  kind: 'lore',
  kicker: 'Wynn, once the Desert Inn · 1950',
  title: 'The billionaire who wouldn’t leave',
  text: 'Howard Hughes moved into the Desert Inn’s penthouse in 1966. When the hotel asked him to leave for the New Year’s high rollers, he bought it. He went on to buy half the Strip. Steve Wynn imploded the DI and opened Wynn here in 2005.',
  at: { x: 2160, z: -1250 },
  hint: 'Circle the bronze crescent towers at the north end of the Strip.',
  r: 340,
  h: 140,
  test: near({ x: 2160, z: -1250 }, 220, 200),
};
