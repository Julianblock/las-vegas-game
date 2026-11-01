import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import type { Resort } from '../../resort';

/** Each tower: footprint centre, the bearing that runs local x along its long face, lean direction. */
const TOWERS: [number, number, number][] = [
  [1350.5, 953.5, -1],
  [1408, 953, 1],
];

/**
 * Veer Towers (2010), CityCenter's condos: two 37-storey towers leaning 5°
 * away from each other, grey glass ribbed with yellow fins, built up in
 * stepped slabs so the lean reads from the boulevard.
 */
function buildVeer(k: Kit) {
  const h = 132;
  const bands = 22;
  const shift = Math.tan((5 * Math.PI) / 180) * (h / bands);
  for (const [x, z, s] of TOWERS) {
    const fr = k.frame(x, z, 200.8, 20, 24);
    for (let i = 0; i < bands; i++) {
      const y = (i * h) / bands;
      const ox = s * shift * (i + 0.5);
      k.box(fr, ox, y - (i ? 0 : 3), 0, 29, h / bands + (i ? 0.05 : 3), 40, '#8e9898', { rough: 0.2, fx: FX.GLASS, glow: 0.8 });
      if (i % 2 === 0) for (const fz of [-20.2, 20.2]) k.box(fr, ox, y, fz, 29.4, 0.6, 0.4, '#e0c040', { rough: 0.4, fx: FX.METAL });
    }
    k.beacons(fr, s * shift * bands, 0, 20, h);
  }
}

export const veer: Resort = {
  id: 'veer',
  name: 'Veer Towers',
  build: buildVeer,
  replaces: (m) => /^Veer Towers/.test(m.name),
};
