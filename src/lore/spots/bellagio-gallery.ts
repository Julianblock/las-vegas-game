import type { Spot } from '../spot';
import { near } from '../tests';

export const bellagioGallerySpot: Spot = {
  id: 'bellagio-gallery',
  kind: 'lore',
  kicker: 'Bellagio Gallery of Fine Art',
  title: 'Picassos in a casino',
  text: 'Steve Wynn opened the Bellagio in 1998 with a gallery of his own paintings: Van Gogh, Monet, Cézanne and Picasso, a few steps from the slot machines. Critics laughed, then queued to get in.',
  at: { x: 1108, z: 338 },
  hint: 'Find the gallery inside the Bellagio.',
  r: 150,
  h: 50,
  test: near({ x: 1108, z: 338 }, 110, 50),
};
