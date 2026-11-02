import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

const HORSE = '#fff0c0';
const RIDER = '#4ab8ff';
const HAT = '#ff4aa0';

/** Front legs paw the air in two poses so the horse rears in a loop. */
const FORELEGS = [
  [[340, 290, 395, 300, 405, 350], [318, 302, 352, 338, 346, 380]],
  [[340, 290, 392, 275, 420, 315], [318, 302, 365, 318, 372, 362]],
];

/** The cowboy waves his hat high, then low. */
const ARM = [
  [285, 182, 322, 140, 336, 96],
  [285, 182, 330, 160, 360, 132],
];

/**
 * The Hacienda’s horse and rider (1967), which stood over the hotel at the
 * south end of the Strip until 1996, restored by the Neon Museum and raised
 * on a mast at Las Vegas Boulevard and Fremont Street.
 */
export const haciendaSign: SignSpec = {
  name: 'galleryHacienda',
  w: 512,
  h: 512,
  frames: 2,
  cutout: true,
  draw(g, _w, _h, f) {
    tube(g, [130, 300, 170, 262, 250, 250, 330, 236, 352, 262, 340, 300, 290, 330, 210, 338, 160, 330, 130, 300], HORSE, 9, true);
    tube(g, [330, 240, 352, 196, 376, 150], HORSE, 9);
    tube(g, [352, 262, 384, 210, 400, 176], HORSE, 9);
    tube(g, [372, 146, 420, 122, 448, 150, 402, 178], HORSE, 9, true);
    tube(g, [384, 132, 380, 112], HORSE, 7);
    tube(g, [372, 150, 352, 168, 340, 200, 330, 224], '#ffb040', 6);
    tube(g, [132, 300, 104, 330, 86, 372, 96, 400], HORSE, 8);
    tube(g, [168, 330, 150, 408, 160, 470, 178, 470], HORSE, 9);
    tube(g, [206, 338, 206, 420, 226, 470, 244, 470], HORSE, 9);
    for (const leg of FORELEGS[f]) tube(g, leg, HORSE, 9);
    tube(g, [240, 248, 300, 242, 296, 262, 244, 266], '#ff7a30', 6, true);
    tube(g, [272, 244, 284, 172], RIDER, 10);
    tube(g, [272, 244, 304, 280, 300, 322, 316, 324], RIDER, 9);
    tube(g, [282, 186, 262, 214, 252, 236], RIDER, 8);
    tube(g, ARM[f], RIDER, 8);
    g.save();
    g.shadowColor = RIDER;
    g.shadowBlur = 20;
    g.strokeStyle = RIDER;
    g.lineWidth = 8;
    g.beginPath();
    g.arc(288, 152, 16, 0, Math.PI * 2);
    g.stroke();
    g.restore();
    tube(g, [262, 134, 314, 134], HAT, 7);
    tube(g, [274, 134, 278, 116, 300, 116, 304, 134], HAT, 7);
    const [hx, hy] = ARM[f].slice(4);
    tube(g, [hx - 20, hy - 6, hx + 20, hy - 6], HAT, 7);
    tube(g, [hx - 10, hy - 6, hx - 7, hy - 22, hx + 7, hy - 22, hx + 10, hy - 6], HAT, 7);
  },
};

export const HACIENDA: Mount = { name: 'galleryHacienda', x: 4466, z: -5922, deg: 208, h: 7, lift: 9 };
