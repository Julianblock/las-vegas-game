import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

/** Pips for a die face, in thirds of the side. */
const PIPS: Record<number, [number, number][]> = {
  5: [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]],
  6: [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2]],
};

function die(g: CanvasRenderingContext2D, x: number, y: number, s: number, tilt: number, n: number) {
  g.save();
  g.translate(x, y);
  g.rotate(tilt);
  tube(g, [-s / 2, -s / 2, s / 2, -s / 2, s / 2, s / 2, -s / 2, s / 2], '#ff3a2a', 10, true);
  g.shadowColor = '#ffffff';
  g.shadowBlur = 16;
  g.fillStyle = '#ffffff';
  for (const [i, j] of PIPS[n]) {
    g.beginPath();
    g.arc((i - 1) * s * 0.3, (j - 1) * s * 0.3, s * 0.08, 0, Math.PI * 2);
    g.fill();
  }
  g.restore();
}

/** A pair of neon dice tumbling at Fremont and 8th: a natural eleven. */
export const diceSign: SignSpec = {
  name: 'galleryDice',
  w: 512,
  h: 320,
  cutout: true,
  draw(g) {
    die(g, 150, 170, 180, -0.25, 5);
    die(g, 360, 150, 180, 0.3, 6);
  },
};

export const DICE: Mount = { name: 'galleryDice', x: 4755, z: -5757, deg: 298, h: 4, lift: 6 };
