import type { Kit } from '../../kit';
import { cypressRow } from '../../parts/cypress';
import { reflectingPool } from '../../parts/fountain';
import { statue, victory } from '../../parts/statue';

/**
 * The fountain drive off the Strip: twin reflecting pools of jets lined with
 * cypress and marble statuary, running west to the porte-cochère under the
 * Palace Tower. Frame at the Strip sidewalk, +x north, +z east to the street.
 */
export function buildCaesarsDrive(k: Kit) {
  const fr = k.frame(1505, -78, 90);
  for (const side of [-1, 1]) {
    reflectingPool(k, fr, side * 19, -80, 9, 130, 14);
    cypressRow(k, fr, side * 26, -18, side * 26, -150, 7, 12);
    for (let z = -30; z > -150; z -= 30) statue(k, fr, side * 13, z, 3.2, side > 0 ? Math.PI / 2 : -Math.PI / 2);
  }
  victory(k, fr, 0, -6, 5);
  k.porte(fr, 0, -168, 34, 18, '#ece4d2', 8);
  k.reserve(fr, 0, -80, 32, 72);
  k.walk(fr, [[-12, 4], [-12, -150], [12, -150], [12, 4]]);
  k.gather(fr, 0, -6, 6, 10);
}
