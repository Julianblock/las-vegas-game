import type { Kit } from '../../kit';

/**
 * The Flamingo Wildlife Habitat: a lagoon garden of Chilean flamingos, koi,
 * pelicans and ibis between the towers, and the stone marker to Benjamin
 * "Bugsy" Siegel by the wedding lawn near where his penthouse stood.
 */
export function buildHabitat(k: Kit) {
  const fr = k.frame(1705, -95, 270);
  // Lagoon: a shallow blue basin ringed in rockwork; the flock gathers here.
  k.box(fr, 0, -0.6, 0, 46, 0.65, 26, '#2f8fa8', { rough: 0.1, glow: 0.08 });
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    k.box(fr, Math.cos(a) * 24, -0.4, Math.sin(a) * 14, 3 + (i % 3), 1.2 + (i % 2) * 0.6, 2.4, '#8a7a62', { rough: 1 }, a);
  }
  // Pink birds standing in the shallows (one-legged posts with a body).
  for (let i = 0; i < 14; i++) {
    const x = Math.sin(i * 2.3) * 16;
    const z = Math.cos(i * 1.7) * 8;
    k.box(fr, x, -0.1, z, 0.05, 0.9, 0.05, '#e86a8a');
    k.box(fr, x, 0.8, z, 0.6, 0.35, 0.3, '#ff7aa0', { rough: 0.7 }, i);
    k.box(fr, x + 0.25, 1.1, z, 0.06, 0.5, 0.06, '#ff7aa0', { rough: 0.7 }, i);
  }
  k.gather(fr, 0, 16, 8, 22);
  k.walk(fr, [[-30, 18], [0, 20], [30, 18], [34, 0], [30, -18], [-30, -18], [-34, 0], [-30, 18]]);

  // Bugsy's marker: a granite slab with a bronze plaque on the garden path.
  const m = k.frame(1690, -45, 270);
  k.box(m, 0, -0.2, 0, 1.6, 1.3, 0.5, '#5a5652', { rough: 0.6 });
  k.box(m, 0, 0.45, 0.27, 1.1, 0.6, 0.04, '#8a6a32', { rough: 0.3, fx: 3 });
  k.gather(m, 0, 3, 3, 4);
}
