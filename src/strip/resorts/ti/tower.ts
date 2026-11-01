import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { yTower } from '../../parts/ytower';

export const TI = { x: 1634, z: -967 };

/**
 * Treasure Island's Y tower (1993), the Mirage's sister: 36 storeys of
 * terracotta-salmon with white banding, "TI" in red on each wing.
 */
export function buildTiTower(k: Kit) {
  const fr = k.frame(TI.x, TI.z, 60, 70, 70);
  const top = yTower(k, fr, { wing: 66, width: 20, floors: 36, color: '#d89a78', wash: 0.8, step: 3 });
  k.box(fr, 0, top + 2, 0, 16, 5, 16, '#c88a68', { rough: 0.6 });
  for (let w = 0; w < 3; w++) {
    const yaw = (w * 2 * Math.PI) / 3;
    const d = 20 * 0.3 + 22.3;
    k.sign(fr, 'tiCrown', Math.sin(yaw) * d, top - 6, Math.cos(yaw) * d, 9, 1.3, FX.NEON, yaw);
  }
  k.beacons(fr, 0, 0, 12, top + 7);
}
