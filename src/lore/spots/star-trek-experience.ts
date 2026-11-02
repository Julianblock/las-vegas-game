import type { Spot } from '../spot';
import { near } from '../tests';

export const starTrekExperienceSpot: Spot = {
  id: 'star-trek-experience',
  kind: 'lore',
  kicker: 'Star Trek: The Experience · 1998–2008',
  title: 'Drinks in Quark’s Bar',
  text: 'For ten years the Las Vegas Hilton had a Star Trek attraction: beam aboard the Enterprise, ride a shuttle through space, then have a drink in Quark’s Bar, served by Ferengi and Klingons.',
  at: { x: 3462, z: -2137 },
  hint: 'Look beside the Westgate, where Elvis played.',
  r: 110,
  h: 50,
  test: near({ x: 3462, z: -2137 }, 70, 50),
};
