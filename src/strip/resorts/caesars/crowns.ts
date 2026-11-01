import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** "CAESARS PALACE" in lit Roman capitals across the tower crowns. */
export function buildCaesarsCrowns(k: Kit) {
  // Palace Tower: the long south face over the pool, and its east end.
  k.sign(k.frame(1176, -66, 180), 'caesarsCrown', 0, 124, 0.6, 10, 1.4, FX.NEON);
  k.sign(k.frame(1258.5, -80, 90), 'caesarsCrown', 0, 126, 0.6, 3.2, 1.4, FX.NEON);
  // Augustus Tower: north face toward the drive and south face over Flamingo Road.
  k.sign(k.frame(1312, 61.5, 0), 'caesarsCrown', 0, 102, 0.6, 10, 1.4, FX.NEON);
  k.sign(k.frame(1312, 104, 180), 'caesarsCrown', 0, 102, 0.6, 10, 1.4, FX.NEON);
  k.beacons(k.frame(1176, -84, 180), 0, 0, 150, 133);
}
