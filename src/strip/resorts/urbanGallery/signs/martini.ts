import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { tube } from '../tube';

/** Fremont East’s giant martini glass (2007), olive and all, at 6th Street. */
export const martiniSign: SignSpec = {
  name: 'galleryMartini',
  w: 384,
  h: 512,
  cutout: true,
  draw(g) {
    tube(g, [40, 60, 344, 60, 192, 300, 40, 60], '#ff4ab8', 12, true);
    tube(g, [80, 100, 304, 100], '#40e0ff', 8);
    tube(g, [192, 300, 192, 450], '#ff4ab8', 12);
    tube(g, [100, 460, 284, 460], '#ff4ab8', 12);
    tube(g, [150, 40, 260, 200], '#ffd040', 6);
    g.save();
    g.shadowColor = '#60ff60';
    g.shadowBlur = 24;
    g.fillStyle = '#7aff5a';
    g.beginPath();
    g.arc(232, 160, 24, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#ff3a2a';
    g.beginPath();
    g.arc(240, 154, 8, 0, Math.PI * 2);
    g.fill();
    g.restore();
  },
};

export const MARTINI: Mount = { name: 'galleryMartini', x: 4537, z: -5874, deg: 298, h: 6, lift: 4 };
