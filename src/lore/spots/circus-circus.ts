import type { Spot } from '../spot';
import { near } from '../tests';

export const circusCircusSpot: Spot = {
  id: 'circus-circus',
  kind: 'lore',
  kicker: 'Circus Circus · 1968',
  title: 'Trapezes over the tables',
  text: 'Jay Sarno, the man behind Caesars, built a big top where acrobats flew above the gamblers. Hunter S. Thompson wrote of it in Fear and Loathing in Las Vegas. Behind it, the pink-domed Adventuredome hides a theme park.',
  at: { x: 2383, z: -2321 },
  hint: 'Fly over the striped big top on the north Strip.',
  r: 240,
  h: 80,
  test: near({ x: 2383, z: -2321 }, 140, 80),
};
