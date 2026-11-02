import type { Spot } from '../spot';
import { near } from '../tests';

export const jubileeSpot: Spot = {
  id: 'jubilee',
  kind: 'lore',
  kicker: 'Jubilee! · 1981–2016',
  title: 'The Titanic sank twice nightly',
  text: 'Jubilee! opened with the first MGM Grand in 1981 and ran 35 years, the last of the big feathered showgirl revues. Every night, a hundred dancers in rhinestones came down the staircase, Samson pulled down the temple, and the Titanic sank on stage.',
  at: { x: 1760, z: 300 },
  hint: 'Look along the Flamingo side of the Horseshoe, where the showroom was.',
  r: 100,
  h: 50,
  test: near({ x: 1760, z: 300 }, 60, 50),
};
