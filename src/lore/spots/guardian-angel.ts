import type { Spot } from '../spot';
import { near } from '../tests';

export const guardianAngelSpot: Spot = {
  id: 'guardian-angel',
  kind: 'lore',
  kicker: 'Guardian Angel Cathedral · 1963',
  title: 'Chips in the collection plate',
  text: 'Paul Revere Williams designed this A-frame church on land given by Desert Inn boss Moe Dalitz. Masses were timed for dealers coming off shift, gamblers dropped casino chips in the collection, and one stained-glass window shows the Strip’s hotels.',
  at: { x: 2387, z: -1611 },
  hint: 'Look for the steep white roof behind the Strip, near Wynn.',
  r: 160,
  h: 60,
  test: near({ x: 2387, z: -1611 }, 90, 60),
};
