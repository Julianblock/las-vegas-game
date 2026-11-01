import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { cypressRow } from '../../parts/cypress';
import { tieredFountain } from '../../parts/fountain';
import { stripLamp } from '../../parts/lamp';
import { palmRow } from '../../parts/palm';
import { portico } from '../../parts/temple';

/**
 * Caesars' Strip frontage from Flamingo Road north to the Forum Shops: the
 * temple marquee at the corner, the Forum Shops rotunda, palms and lamps.
 * Same frame as the drive: +x north along the walk, +z east.
 */
export function buildCaesarsFrontage(k: Kit) {
  const fr = k.frame(1505, -78, 90);

  // Temple marquee near the Flamingo corner: portico, LED and name panel.
  portico(k, fr, -170, -8, 26, 10, 6);
  k.sign(fr, 'caesarsMarquee', -170, 14.6, -6, 3.6, 1.1, FX.NONE, 0, true);
  k.box(fr, -146, -0.5, -4, 3, 22, 3, '#ece4d2', { rough: 0.6 });
  k.sign(fr, 'caesarsLED', -146, 15, -2.4, 7, 1.2);
  k.sign(fr, 'caesarsLED', -146, 15, -5.6, 7, 1.2, FX.NONE, Math.PI);
  tieredFountain(k, fr, -170, -26, 7);

  // Forum Shops rotunda: a drum of columns under a shallow dome.
  const rx = 210, rz = -24;
  k.cyl(fr, rx, -0.5, rz, 16, 16, 15, '#ece4d2', { rough: 0.7, fx: FX.WASH }, 32);
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    k.cyl(fr, rx + Math.cos(a) * 17, -0.5, rz + Math.sin(a) * 17, 0.8, 0.7, 14, '#f4eee2', { rough: 0.6 }, 10);
  }
  k.cyl(fr, rx, 14.5, rz, 18, 9, 4, '#7a9aa0', { rough: 0.5, fx: FX.METAL }, 32);
  k.reserve(fr, rx, rz, 20, 20);
  k.gather(fr, rx, -2, 8, 16);

  cypressRow(k, fr, -150, -16, 180, -16, 9, 11);
  palmRow(k, fr, -188, 3, 250, 3, 15, 13);
  for (let x = -180; x <= 250; x += 40) stripLamp(k, fr, x, 7);
  k.walk(fr, [[-190, 2], [-60, 2], [80, 2], [250, 2]]);
}
