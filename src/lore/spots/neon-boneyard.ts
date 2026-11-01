import type { Spot } from '../spot';
import { near } from '../tests';

export const neonBoneyardSpot: Spot = {
  id: 'neon-boneyard',
  kind: 'lore',
  kicker: 'The Neon Boneyard',
  title: 'Where old signs go',
  text: 'The Neon Museum keeps the town’s retired signs, from the Stardust to the Moulin Rouge, out in the open. Its visitor centre is the shell-shaped lobby of the La Concha Motel, designed by Paul Revere Williams and moved here in pieces in 2006.',
  at: { x: 4927, z: -6802 },
  hint: 'Keep north up Las Vegas Boulevard past downtown.',
  r: 160,
  h: 60,
  test: near({ x: 4927, z: -6802 }, 100, 60),
};
