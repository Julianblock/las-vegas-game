import type { Kit } from '../../kit';

/** The Arc de Triomphe over Paris' south entry drive, two-thirds scale. */
export function buildArc(k: Kit) {
  const fr = k.frame(1658, 489, 270);
  const S = '#e6dccb';
  for (const s of [-1, 1]) k.box(fr, s * 5.6, -0.4, 0, 5, 18.4, 12, S, { rough: 0.8 });
  k.box(fr, 0, 12, 0, 6.2, 6, 12, S, { rough: 0.8 });
  k.box(fr, 0, 18, 0, 17.4, 1.2, 12.6, S, { rough: 0.7 });
  k.box(fr, 0, 19.2, 0, 16.2, 4.2, 11.8, S, { rough: 0.8 });
  // Relief panels and the lit vault.
  for (const s of [-1, 1]) k.box(fr, s * 5.6, 6, 6.05, 3.4, 5, 0.1, '#d2c6b0', { rough: 0.9 });
  k.box(fr, 0, 11.6, 0, 6, 0.3, 11, '#fff0d0', { glow: 0.8 });
  k.light(fr.p(0, 11, 0), 1, 0.85, 0.6, 4);
}
