import { neon, SERIF, type SignSpec } from '../../../../world/signKit';

/** The red Harrah's wordmark on the chevron's two Strip-facing wings. */
export const harrahsCrown: SignSpec = {
  name: 'harrahsCrown',
  w: 1024,
  h: 224,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'Harrah’s', w / 2, h * 0.55, w * 0.92, (p) => `bold italic ${p}px ${SERIF}`, h * 0.8, '#ff2a1a');
  },
};
