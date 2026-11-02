import type { Frame } from '../../../../world/builders';
import type { Kit } from '../../../kit';

const STEEL = '#6a6e72';
/** Face height and width (m): a standard 14 × 48 ft bulletin. */
const FACE_H = 4.3;
const FACE_W = FACE_H * (768 / 224);
/** Height of the face's bottom edge. */
const LIFT = 12;

/**
 * A monopole bulletin, its double face spanning local x and read from ±z:
 * the pole, a steel back frame, the catwalk and three gooseneck lamps a side.
 */
export function billboard(k: Kit, fr: Frame) {
  k.cyl(fr, 0, 0, 0, 0.75, 0.55, LIFT + 0.4, STEEL, { rough: 0.5 }, 10);
  k.box(fr, 0, LIFT - 0.1, 0, FACE_W + 0.4, FACE_H + 0.2, 0.5, STEEL, { rough: 0.6 });
  k.sign(fr, 'billboardFace', 0, LIFT + FACE_H / 2, 0.3, FACE_H, 0.45, 0, 0, false);
  k.sign(fr, 'billboardFace', 0, LIFT + FACE_H / 2, -0.3, FACE_H, 0.45, 0, Math.PI, false);
  for (const s of [-1, 1]) {
    k.box(fr, 0, LIFT - 0.35, s * 0.9, FACE_W, 0.08, 1.1, STEEL, { rough: 0.6 });
    for (const u of [-0.33, 0, 0.33]) {
      k.box(fr, u * FACE_W, LIFT - 0.3, s * 1.3, 0.08, 0.08, 0.6, STEEL);
      k.light(fr.p(u * FACE_W, LIFT - 0.2, s * 1.55), 1, 0.95, 0.85, 2.4);
    }
  }
}
