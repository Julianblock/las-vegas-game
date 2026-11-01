import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/**
 * The Doge's Palace front on the Strip: an open arcade of columns, the
 * loggia of pointed arches above, and the rose-and-white diamond wall under
 * a crenellated parapet. Frame at the Strip walk, +x south, +z west.
 */
export function buildDoge(k: Kit) {
  const fr = k.frame(1666, -545, 270);
  const len = 92;
  k.reserve(fr, 0, -18, len / 2, 20);
  // Arcade: 18 columns under a cornice.
  k.box(fr, 0, -0.5, -20, len, 8.5, 30, '#efe4d6', { rough: 0.8 });
  for (let i = 0; i <= 18; i++) k.cyl(fr, -len / 2 + 2 + i * ((len - 4) / 18), -0.3, -4.4, 0.7, 0.6, 7.8, '#f4ece0', { rough: 0.6 }, 10);
  k.storefront(fr, 0, -5.1, len - 4, 6, 0.9);
  // Loggia.
  k.box(fr, 0, 8, -18, len, 1, 30, '#f4ece0', { rough: 0.7 });
  for (let i = 0; i <= 36; i++) k.cyl(fr, -len / 2 + 1.5 + i * ((len - 3) / 36), 9, -3.8, 0.35, 0.3, 5, '#f8f2e8', { rough: 0.6 }, 8);
  k.box(fr, 0, 9, -6, len - 1, 5, 0.5, '#2a2420', { glow: 0.4 });
  // Diamond wall and parapet.
  k.box(fr, 0, 14, -19, len, 11, 28, '#f0d8cc', { rough: 0.8 });
  for (const x of [-23, 23]) k.sign(fr, 'dogeWall', x, 19.5, -4.9, 11, 0.4, FX.NONE);
  for (let x = -len / 2 + 1.5; x < len / 2; x += 3) k.box(fr, x, 25, -5.4, 1.4, 1.4, 1, '#f8f2e8', { rough: 0.7 });
  k.porte(fr, 26, 6, 24, 10, '#efe4d6', 7);
  k.walk(fr, [[-50, 2], [0, 2], [50, 2]]);
}
