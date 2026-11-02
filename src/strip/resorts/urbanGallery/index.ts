import type { Resort } from '../../resort';
import { mount } from './pole';
import { MOUNTS, SIGNS } from './signs';

/** The Neon Museum’s street gallery: restored signs raised along Las Vegas Boulevard North. */
export const urbanGallery: Resort = {
  id: 'urbanGallery',
  name: 'Neon Museum street gallery',
  signs: SIGNS,
  build: (k) => {
    for (const m of MOUNTS) mount(k, m);
  },
};
