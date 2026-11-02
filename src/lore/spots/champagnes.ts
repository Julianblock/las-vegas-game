import type { Spot } from '../spot';
import { near } from '../tests';

export const champagnesSpot: Spot = {
  id: 'champagnes',
  kind: 'lore',
  kicker: 'Champagne’s Café · Maryland Parkway',
  title: 'Red velvet dive',
  text: 'Champagne’s has poured drinks on Maryland Parkway for decades, under red flocked wallpaper and a sign older than most of its customers.',
  at: { x: 4712, z: -981 },
  hint: 'Find the dive bar on Maryland Parkway.',
  r: 150,
  h: 50,
  test: near({ x: 4712, z: -981 }, 110, 50),
};
