import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * RIO on the Masquerade tower's two broad faces (the lens-shaped slab's
 * south face looks down Flamingo Road, its north face over the Ipanema
 * tower), and a smaller one on the Ipanema's Flamingo-facing wing.
 */
export function buildCrowns(k: Kit) {
  const south = k.frame(312, -10.5, 180);
  k.sign(south, 'rioCrown', 0, 108, 0.6, 16, 1.4, FX.NEON);
  const north = k.frame(312, -33.5, 0);
  k.sign(north, 'rioCrown', 0, 108, 0.6, 16, 1.4, FX.NEON);
  const ipanema = k.frame(171, -78, 180);
  k.sign(ipanema, 'rioCrown', 0, 64, 0.6, 9, 1.3, FX.NEON);
}
