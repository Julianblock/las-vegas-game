import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { yTower } from '../../parts/ytower';

export const MIRAGE = { x: 1333, z: -591 };

/**
 * The Mirage's gold-glass Y tower (1989), Steve Wynn's template for the
 * modern Strip: 30 storeys, wings stepping down at the tips. Closed in July
 * 2024 and being re-skinned for Hard Rock, its new crown letters lit.
 */
export function buildMirageTower(k: Kit) {
  const fr = k.frame(MIRAGE.x, MIRAGE.z, 90, 70, 70);
  const top = yTower(k, fr, { wing: 74, width: 22, floors: 30, color: '#d8a848', fx: FX.GLASS, wash: 0.4, step: 3 });
  k.box(fr, 0, top + 2, 0, 18, 6, 18, '#c89838', { rough: 0.4, fx: FX.GLASS });
  k.sign(fr, 'hardRockCrown', 0, top - 3, 31.9, 3.2, 1.3, FX.NEON);
  k.beacons(fr, 0, 0, 14, top + 8);
}
