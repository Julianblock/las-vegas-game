import { Vector3 } from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * VooDoo on the Masquerade's 51st floor: the glass lounge on the roof, its
 * green script, tiki torches round the open deck, and the cables of the
 * VooDoo Zip Line that ran to the Ipanema tower from 2012 to 2021.
 */
export function buildRooftop(k: Kit) {
  const fr = k.frame(311, -22, 180);
  const roof = 130;
  k.box(fr, 0, roof, 0, 46, 1, 16, '#5a4a3a', { rough: 0.8 });
  for (let x = -22; x <= 22; x += 4) {
    for (const z of [-7.6, 7.6]) {
      k.cyl(fr, x, roof + 1, z, 0.08, 0.08, 1.6, '#3a2a1a', { rough: 0.8 }, 4);
      k.light(fr.p(x, roof + 2.8, z), 1, 0.55, 0.15, 1.2, 0);
    }
  }
  k.box(fr, 0, roof + 1, -11.5, 46, 1.1, 0.12, '#bfe6ff', { rough: 0.1, glow: 0.3 });
  k.box(fr, 0, roof + 1, 11.5, 46, 1.1, 0.12, '#bfe6ff', { rough: 0.1, glow: 0.3 });
  k.sign(fr, 'voodooSign', 0, 136.5, 11.3, 4.5, 1.4, FX.NEON);
  k.sign(fr, 'voodooSign', 0, 136.5, -11.3, 4.5, 1.4, FX.NEON, Math.PI);
  // A bearing-180 frame is world-aligned, so the Ipanema roof is a plain offset.
  for (const dx of [0, 3]) {
    k.tube(fr, new Vector3(-20 + dx, roof + 4, -6), new Vector3(170 - 311 + dx, 76, -170 + 22), 0.06, '#9a9a9a', 0);
  }
}
