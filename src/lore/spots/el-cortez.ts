import type { Spot } from '../spot';
import { near } from '../tests';

export const elCortezSpot: Spot = {
  id: 'el-cortez',
  kind: 'lore',
  kicker: 'El Cortez · 1941',
  title: 'The oldest casino still standing',
  text: 'El Cortez opened on Fremont Street in 1941, and Bugsy Siegel and Meyer Lansky bought into it in 1945 before the Flamingo. Its brick front has barely changed since 1952.',
  at: { x: 4604, z: -5911 },
  hint: 'East along Fremont Street from the canopy.',
  r: 140,
  h: 60,
  test: near({ x: 4604, z: -5911 }, 90, 60),
};
