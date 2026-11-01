import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

export const STRAT = { x: 3003, z: -3507 };

/** Heights of the tower's parts above the ground (m). */
export const POD = { base: 259, top: 290, deck: 265, mast: 350 };

/**
 * The Strat (1996, the Stratosphere until 2020): at 350 m the tallest
 * freestanding observation tower in the United States. Three slender
 * concrete legs flare from the core to its foot; the twelve-storey pod
 * stacks the revolving restaurant, indoor and outdoor decks and the
 * SkyJump platform; a steel mast rises to the Big Shot's tip.
 */
export function buildTower(k: Kit) {
  const fr = k.frame(STRAT.x, STRAT.z, 180, 22, 22);
  const conc = { rough: 0.8 };
  k.cyl(fr, 0, -1, 0, 7.5, 6, POD.base + 1, '#e4e0d8', conc, 24);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    for (let s = 0; s < 6; s++) {
      const t = s / 6;
      const out = 18 * (1 - t) * (1 - t) + 6.5;
      const y = t * POD.base;
      k.box(fr, Math.cos(a) * out, y, Math.sin(a) * out, 3.6, POD.base / 6 + 0.5, 6, '#ece8e0', conc, -a);
    }
  }
  // The pod: a flared drum of floors, glazed bands, the revolving restaurant ring.
  const rings: [number, number, number, string, number][] = [
    [POD.base, 4, 12, '#d8d4cc', 0],
    [POD.base + 4, 4, 17, '#d8d4cc', 0],
    [POD.base + 8, 5, 20, '#3a4a5a', FX.GLASS],
    [POD.base + 13, 3, 21, '#e4e0d8', 0],
    [POD.base + 16, 5, 20, '#3a4a5a', FX.GLASS],
    [POD.base + 21, 3, 19.5, '#e4e0d8', 0],
    [POD.base + 24, 4, 18, '#3a4a5a', FX.GLASS],
    [POD.base + 28, 2.5, 15, '#e4e0d8', 0],
  ];
  for (const [y, h, r, color, fx] of rings) k.cyl(fr, 0, y, 0, r, r, h, color, { rough: fx ? 0.1 : 0.7, fx, glow: fx ? 1 : 0 }, 36);
  k.cyl(fr, 0, POD.top, 0, 3.4, 2.4, POD.mast - POD.top - 10, '#d8d8d8', { rough: 0.4, fx: FX.METAL }, 12);
  k.cyl(fr, 0, POD.mast - 10, 0, 1, 0.4, 10, '#c8202a', { rough: 0.5 }, 8);
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    k.light(fr.p(Math.cos(a) * 21.3, POD.base + 14.5, Math.sin(a) * 21.3), 1, 0.85, 0.6, 2.5);
  }
  k.light(fr.p(0, POD.mast + 0.5, 0), 1, 0.08, 0.04, 6, 1);
  k.light(fr.p(0, POD.top + 20, 0), 1, 0.08, 0.04, 4, 1);
}
