import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { stripLamp } from '../../parts/lamp';
import { palmRow } from '../../parts/palm';
import { arcade } from '../../parts/porch';
import { pylon } from '../../parts/pylon';

/**
 * The Flamingo (1946): Bugsy Siegel's pink resort on the east side of the
 * Strip just north of Flamingo Road. Local frame on the west tower face
 * (x = 1607), +x runs south toward Flamingo Road, +z out to the boulevard.
 */
export function buildFlamingo(k: Kit) {
  const fr = k.frame(1607, -17, 270);

  // Pink script crowns on the Strip face and the south wing over Flamingo Road.
  k.sign(fr, 'flamingoScript', -8, 74, 0.5, 15, 1.6, FX.NEON);
  const south = k.frame(1700, 43, 180);
  k.sign(south, 'flamingoScript', 0, 74, 0.5, 14, 1.6, FX.NEON);

  // The bloom: a pink drum at the casino doors flaring neon plumes over the walk.
  k.cyl(fr, 42, -0.5, 9, 7, 7, 9, '#ff7ab8', { rough: 0.4, glow: 0.5, fx: FX.NEON }, 24);
  k.cyl(fr, 42, 8.5, 9, 7.6, 7.6, 1.2, '#ff9a3c', { rough: 0.4, glow: 1.2 }, 24);
  k.sign(fr, 'flamingoBloom', 42, 22, 16.8, 26, 1.5, FX.CHASE);
  k.reserve(fr, 42, 9, 9, 9);
  k.glow(fr, 42, 16, 30, 0, 36, 1, 0.3, 0.65);

  // Casino frontage: glazing under a pink awning band either side of the drum.
  arcade(k, fr, 12, 0.4, 40, 6, '#e85aa0');
  arcade(k, fr, 64, 0.4, 24, 6, '#e85aa0');
  k.gather(fr, 42, 20, 10, 18);
  k.walk(fr, [[-70, 27], [-20, 27], [30, 27], [80, 27]]);

  pylon(k, fr, -46, 28, { crown: 'flamingoScript', screen: 'flamingoLED', h: 34, w: 16, color: '#f0c8d8' });
  palmRow(k, fr, -68, 31, 62, 31, 14, 13);
  for (let x = -60; x <= 60; x += 40) stripLamp(k, fr, x, 33);
}
