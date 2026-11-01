import type { Kit } from '../../kit';
import { suspension } from '../../parts/suspension';

/**
 * The Brooklyn Bridge replica that carries NYNY's Strip sidewalk: a 1:5
 * span with its two arched towers, the harbour pool beneath, the walk on
 * its deck. Frame on the west walk facing the Strip, local x north.
 */
export function buildBridge(k: Kit) {
  const fr = k.frame(1499, 1570, 90);
  k.reserve(fr, 0, -6, 52, 8);
  k.box(fr, 0, -0.8, -6, 100, 0.6, 9, '#3a6a8a', { rough: 0.1, glow: 0.2 });
  suspension(k, fr, -50, 50, 3, 17, 5);
  k.walk(fr, [[-52, 0], [0, 0], [52, 0]]);
}
