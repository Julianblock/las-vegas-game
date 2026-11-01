import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { palmRow } from '../../parts/palm';
import { pylon } from '../../parts/pylon';

/**
 * Horseshoe Las Vegas (Bally's until 2022) on the southeast corner: crown
 * signs on the twin 26-storey towers, the Strip pylon and frontage.
 */
export function buildHorseshoe(k: Kit) {
  k.sign(k.frame(1691, 271.5, 0), 'horseshoeCrown', 0, 72, 0.6, 12, 1.5, FX.NEON);
  k.sign(k.frame(1627.5, 284, 270), 'horseshoeCrown', 0, 74, 0.6, 4.4, 1.5, FX.NEON);
  k.beacons(k.frame(1691, 284, 0), 0, 0, 120, 80);

  const fr = k.frame(1576, 225, 270);
  pylon(k, fr, 52, 4, { crown: 'horseshoeCrown', screen: 'horseshoeLED', h: 32, w: 16, color: '#7a1414' });
  palmRow(k, fr, -40, 3, 70, 3, 14, 12);
  for (let x = -40; x <= 70; x += 36) stripLamp(k, fr, x, 7);
  k.walk(fr, [[-48, 2], [0, 2], [75, 2]]);
}
