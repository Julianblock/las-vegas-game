import type { Spot } from '../spot';
import { near } from '../tests';

export const tiSpot: Spot = {
  id: 'ti',
  kind: 'lore',
  kicker: 'Treasure Island · 1993',
  title: 'Pirates out front',
  text: 'Two full-size ships fought a cannon battle in Buccaneer Bay every 90 minutes, and the British always sank. In 2003 it became the Sirens of TI, which ended in 2013. The ships still sit in the cove.',
  at: { x: 1772, z: -950 },
  hint: 'Fly low over the ships in the cove at Spring Mountain and the Strip.',
  r: 220,
  h: 70,
  test: near({ x: 1772, z: -950 }, 110, 60),
};
