import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Resort } from '../../resort';
import { Exosphere, SPHERE } from './exosphere';

/** Plinth, the Venetian skybridge, and the glow the Sphere throws on its neighbours. */
function build(k: Kit) {
  const fr = k.frame(SPHERE.x, SPHERE.z, 270);
  k.cyl(fr, 0, -1, 0, 66, 62, 8, '#2a2a2e', { rough: 0.4, fx: FX.METAL }, 48);
  k.reserve(fr, 0, 0, 80, 80);
  // Skybridge west to the Venetian Expo.
  k.box(fr, 0, 9, 105, 8, 5, 130, '#c8ccd2', { rough: 0.2, fx: FX.GLASS, glow: 0.4 });
  for (const z of [60, 110, 160]) k.box(fr, 0, -0.5, z, 3, 9.5, 3, '#a8acb2', { rough: 0.4 });
  k.light(fr.p(0, SPHERE.h + 2, 0), 1, 0.1, 0.05, 4, 1);
  k.glow(fr, 0, 0, 160, 10, SPHERE.h, 1, 0.6, 0.25);
  k.gather(fr, 0, 72, 10, 30);
}

export const sphere: Resort = {
  id: 'sphere',
  name: 'Sphere',
  build,
  replaces: (m) => m.name === 'Sphere',
  shows: (hf) => [new Exosphere(hf)],
};
