import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * PALMS on the main tower's Flamingo face and the Fantasy tower's curve,
 * and GhostBar's glass penthouse on the main tower's roof with its
 * see-through Ghost Deck ledge cantilevered over the valley.
 */
export function buildCrowns(k: Kit) {
  const main = k.frame(-372, 114.4, 0);
  k.sign(main, 'palmsCrown', 0, 116, 0.6, 9, 1.35, FX.NEON);
  const back = k.frame(-372, 135.6, 180);
  k.sign(back, 'palmsCrown', 0, 116, 0.6, 9, 1.35, FX.NEON);
  const fantasy = k.frame(-412, 209.5, 0);
  k.sign(fantasy, 'palmsCrown', 0, 131, 0.6, 8, 1.35, FX.NEON);
  // GhostBar penthouse.
  k.box(main, 0, 126, -10, 34, 5, 14, '#a8c8d8', { rough: 0.1, fx: FX.GLASS, glow: 0.6 });
  k.box(main, 0, 126.5, 1, 12, 0.3, 6, '#cfefff', { rough: 0.05, glow: 0.4 });
  k.box(main, 0, 127.6, 3.9, 12, 1.1, 0.08, '#cfefff', { rough: 0.05, glow: 0.3 });
  k.light(main.p(0, 130, -10), 0.7, 0.85, 1, 4);
  k.beacons(main, 0, -10, 40, 131);
}
