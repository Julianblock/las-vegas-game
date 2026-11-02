import type { Spot } from '../spot';
import { near } from '../tests';

export const liberaceMuseumSpot: Spot = {
  id: 'liberace-museum',
  kind: 'lore',
  kicker: 'Liberace Museum · 1979–2010',
  title: 'Rhinestones in a strip mall',
  text: 'For thirty years Liberace’s pianos, cars and capes filled a museum in a shopping plaza on East Tropicana: a mirror-tiled Rolls-Royce, a piano covered in rhinestones, and capes so heavy they had to be lifted onto him. It closed in 2010, and the collection went into storage.',
  at: { x: 5233, z: 1770 },
  hint: 'Find the shopping plaza on East Tropicana, past UNLV.',
  r: 120,
  h: 50,
  test: near({ x: 5233, z: 1770 }, 80, 50),
};
