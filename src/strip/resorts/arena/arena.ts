import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * T-Mobile Arena (2016), home of the Golden Knights: a 200 m box with
 * chamfered corners clad in bronze-gold metal fins, the glass east lobby
 * opening onto Toshiba Plaza under a giant screen, the name in magenta.
 */
export function buildArena(k: Kit) {
  const fr = k.frame(1043, 1458, 90, 104, 90);
  const W = 190;
  const D = 160;
  const H = 34;
  k.box(fr, 0, -1, 0, D, H + 1, W - 40, '#a88a5a', { rough: 0.45, fx: FX.METAL });
  k.box(fr, 0, -1, 0, D - 40, H + 1, W, '#a88a5a', { rough: 0.45, fx: FX.METAL });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    k.box(fr, sx * (D / 2 - 20), -1, sz * (W / 2 - 20), 28.3, H + 1, 28.3, '#a88a5a', { rough: 0.45, fx: FX.METAL }, Math.PI / 4);
  }
  k.box(fr, 0, H, 0, D - 6, 3, W - 6, '#8a8a88', { rough: 0.7 });
  for (let x = -D / 2 + 22; x <= D / 2 - 22; x += 4) k.box(fr, x, 2, W / 2 + 0.3, 0.5, H - 4, 0.8, '#c8a868', { rough: 0.35, fx: FX.METAL });
  k.box(fr, 0, -0.5, W / 2 + 0.8, 70, 14, 0.4, '#3a4a5a', { rough: 0.05, fx: FX.GLASS, glow: 1 });
  k.box(fr, 0, 15, W / 2 + 1, 60, 17, 1.2, '#111111', { rough: 0.4 });
  k.sign(fr, 'arenaScreen', 0, 23.5, W / 2 + 1.7, 15, 1.25, FX.NONE);
  k.sign(fr, 'tmobileSign', 0, H - 3, W / 2 + 1.1, 4.5, 1.4, FX.NEON);
  k.sign(fr, 'tmobileSign', 0, H - 3, -W / 2 - 0.6, 4.5, 1.4, FX.NEON, Math.PI);
}
