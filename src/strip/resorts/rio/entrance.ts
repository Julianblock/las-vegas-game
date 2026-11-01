import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';
import { pylon } from '../../parts/pylon';
import { FLAMINGO_HALF, flamingoZ, nearCross } from '../../streets';

/**
 * The Rio on Flamingo Road: the marquee pylon at the kerb, read by traffic
 * both ways, the porte-cochère in carnival red and blue, and a pair of
 * giant Venetian carnival masks flanking the drive.
 * Frame faces east along Flamingo; local +x is south.
 */
export function buildEntrance(k: Kit) {
  const fr = k.frame(236, 50, 90);
  pylon(k, fr, 0, 0, { crown: 'rioCrown', screen: 'rioLED', h: 32, w: 16, color: '#1a2a7a', crownH: 8 });
  const drive = k.frame(300, 22, 180);
  k.porte(drive, 0, 0, 34, 16, '#b02030');
  for (const s of [-1, 1]) mask(k, drive, s * 24, 4, s);
  for (let x = 90; x <= 470; x += 16) if (!nearCross(x) && Math.abs(x - 236) > 10) palm(k, k.frame(x, flamingoZ(x) - FLAMINGO_HALF - 4, 180), 0, 0, 13, x);
}

/** A 6 m half-mask on a post: gold face, feathers in carnival colours. */
function mask(k: Kit, fr: ReturnType<Kit['frame']>, x: number, z: number, s: number) {
  k.cyl(fr, x, -0.5, z, 0.25, 0.25, 6, '#2a2a2a', { rough: 0.5 }, 6);
  k.box(fr, x, 6, z, 4.4, 2.2, 0.5, '#d8a830', { rough: 0.3, fx: FX.METAL, glow: 0.4 });
  for (const ex of [-1, 1]) k.box(fr, x + ex * 1.1, 6.9, z + 0.3, 1, 0.5, 0.1, '#0a0a0a', { rough: 0.9 });
  const plumes = ['#ff3a2a', '#ffb02a', '#2ac0ff', '#b03aff', '#3aff7a'];
  for (let i = 0; i < 5; i++) {
    const a = (i - 2) * 0.35 + s * 0.1;
    k.box(fr, x + Math.sin(a) * 2, 9.4, z - 0.1, 0.6, 3.4, 0.12, plumes[i], { rough: 0.6, glow: 0.5 }, 0);
  }
}
