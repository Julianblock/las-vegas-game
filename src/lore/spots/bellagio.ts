import type { Spot } from '../spot';
import { near } from '../tests';

export const bellagioSpot: Spot = {
  id: 'bellagio',
  kind: 'lore',
  kicker: 'Bellagio · 1998',
  title: 'Where the Dunes stood',
  text: 'In 1993 Steve Wynn imploded the Dunes, with cannon fire from his Treasure Island pirate ships as the cue, to make room for a lake. Bellagio opened on its shore in 1998, and more than a thousand nozzles in the lake have danced to Sinatra and Pavarotti ever since.',
  at: { x: 1430, z: 360 },
  hint: 'Skim the lake in front of Bellagio.',
  r: 320,
  h: 90,
  test: near({ x: 1430, z: 360 }, 170, 50),
};
