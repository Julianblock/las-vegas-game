import { FX } from '../../../../world/builders';
import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

const ROPE = '#ffd040';
const DRESS = '#ff4ab8';
const SKIN = '#ffe0c8';

/** The showgirl’s swing, back and forth: rope angle and leg kick per frame. */
const POSES = [-0.28, 0.28];

/** Fremont East’s girl on a swing (2007), kicking her heels over 7th Street. */
export const swingSign: SignSpec = {
  name: 'gallerySwing',
  w: 384,
  h: 512,
  frames: 2,
  cutout: true,
  draw(g, _w, _h, f) {
    tube(g, [40, 24, 344, 24], '#40e0ff', 8);
    g.save();
    g.translate(192, 24);
    g.rotate(POSES[f]);
    tube(g, [-60, 0, -60, 330], ROPE, 5);
    tube(g, [60, 0, 60, 330], ROPE, 5);
    tube(g, [-74, 332, 74, 332], ROPE, 8);
    tube(g, [-40, 330, -10, 250, 40, 250, 50, 330], DRESS, 9, true);
    tube(g, [10, 250, 0, 190], DRESS, 9);
    tube(g, [0, 196, -60, 150], SKIN, 6);
    tube(g, [0, 196, 60, 150], SKIN, 6);
    tube(g, [-30, 332, -70 + f * 30, 420, -50 + f * 60, 470], SKIN, 7);
    tube(g, [20, 332, 10 + f * 40, 420, 40 + f * 50, 465], SKIN, 7);
    tube(g, [-24, 172, -8, 136, 24, 140, 30, 176], '#ffd040', 7, true);
    tube(g, [-10, 150, -40, 110, -20, 80], '#ff3a2a', 6);
    tube(g, [10, 150, 30, 100, 60, 80], '#ff3a2a', 6);
    g.restore();
  },
};

export const SWING: Mount = { name: 'gallerySwing', x: 4633, z: -5791, deg: 298, h: 6.5, lift: 5, fx: FX.NONE };
