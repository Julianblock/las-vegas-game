import type { Spot } from '../spot';
import { near } from '../tests';

export const oscarsSpot: Spot = {
  id: 'oscars',
  kind: 'lore',
  kicker: 'Oscar’s · the Plaza dome',
  title: 'The mob lawyer mayor',
  text: 'Oscar Goodman defended Tony Spilotro and Frank Rosenthal, then served three terms as mayor with a martini and a showgirl on each arm. His steakhouse sits in the glass dome on top of the Plaza, looking straight down Fremont Street.',
  at: { x: 3909, z: -6190 },
  hint: 'Go to the west end of Fremont Street and look up.',
  r: 160,
  h: 50,
  test: near({ x: 3909, z: -6190 }, 120, 50),
};
