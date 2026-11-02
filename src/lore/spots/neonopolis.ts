import type { Spot } from '../spot';
import { near } from '../tests';

export const neonopolisSpot: Spot = {
  id: 'neonopolis',
  kind: 'lore',
  kicker: 'Neonopolis · Fremont and Las Vegas Blvd',
  title: 'A hundred-million-dollar ghost mall',
  text: 'Neonopolis opened in 2002, a three-storey shopping centre meant to drag tourists east from the canopy. The shops never came. For years it sat nearly empty except for the vintage neon signs hung in its courtyard.',
  at: { x: 4426, z: -6001 },
  hint: 'Go to the corner of Fremont and Las Vegas Boulevard.',
  r: 150,
  h: 50,
  test: near({ x: 4426, z: -6001 }, 110, 50),
};
