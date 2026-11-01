import type { Spot } from '../spot';
import { near } from '../tests';

export const siegfriedRoySpot: Spot = {
  id: 'siegfried-roy',
  kind: 'lore',
  kicker: 'Siegfried & Roy',
  title: 'The Secret Garden',
  text: 'For thirteen years two German magicians made white tigers vanish twice nightly at the Mirage. On 3 October 2003, Roy’s 59th birthday, the tiger Mantacore bit him on stage. He survived, and the show never reopened.',
  at: { x: 1380, z: -640 },
  hint: 'Fly low over the gardens behind the old Mirage.',
  r: 160,
  h: 50,
  test: near({ x: 1380, z: -640 }, 90, 50),
};
