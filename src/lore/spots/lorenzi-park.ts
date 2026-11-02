import type { Spot } from '../spot';
import { near } from '../tests';

export const lorenziParkSpot: Spot = {
  id: 'lorenzi-park',
  kind: 'lore',
  kicker: 'Lorenzi Park · Washington Avenue',
  title: 'A resort on two lakes',
  text: 'In 1911 David Lorenzi bought this land and dug two lakes fed by the springs. By the 1920s Lorenzi’s Resort had a dance pavilion, boating and swimming, and was the place to be on a summer night. The lakes are still here as a city park.',
  at: { x: 385, z: -7016 },
  hint: 'Find the park with the lake northwest of downtown.',
  r: 150,
  h: 50,
  test: near({ x: 385, z: -7016 }, 110, 50),
};
