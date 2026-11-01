import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { palm } from '../../parts/palm';
import type { Resort } from '../../resort';
import { welcomeBack, welcomeFront, welcomeStar } from './signs';

/**
 * The sign in the Boulevard's median south of Russell Road, facing drivers
 * arriving from Los Angeles, with the little lot where everyone queues for
 * the photo, and its own grove of palms. On the National Register since 2009.
 */
function buildWelcome(k: Kit) {
  const fr = k.frame(1551, 3766, 180);
  k.reserve(fr, 0, 0, 10, 30);
  for (const s of [-1, 1]) k.box(fr, s * 2.2, -0.5, 0, 0.5, 6.5, 0.5, '#d8d8d8', { rough: 0.4, fx: FX.METAL });
  k.box(fr, 0, 1.5, 0, 0.8, 1.2, 0.4, '#c8c8c8', { rough: 0.5 });
  k.sign(fr, 'welcomeFront', 0, 5.4, 0.12, 5, 1.25, FX.NONE);
  k.sign(fr, 'welcomeBack', 0, 5.4, -0.12, 5, 1.25, FX.NONE, Math.PI);
  k.sign(fr, 'welcomeStar', 0, 8.6, 0.1, 1.8, 1.4, FX.NEON, 0, true);
  for (const [x, z] of [[-5, -6], [5, -6], [-6, 8], [6, 8], [0, -14], [0, 16]]) palm(k, fr, x, z, 11, x * 3 + z);
  k.box(fr, 0, -0.35, 22, 12, 0.3, 26, '#5a5a5a', { rough: 0.9 });
  k.gather(fr, 0, 6, 6, 24);
  k.light(fr.p(0, 1, 3), 1, 0.95, 0.8, 3);
}

export const welcome: Resort = {
  id: 'welcome',
  name: 'Welcome to Fabulous Las Vegas sign',
  signs: [welcomeFront, welcomeBack, welcomeStar],
  build: buildWelcome,
};
