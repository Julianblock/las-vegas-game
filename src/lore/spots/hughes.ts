import type { Spot } from '../spot';
import { near } from '../tests';

export const hughesSpot: Spot = {
  id: 'hughes',
  kind: 'lore',
  kicker: 'Howard Hughes Center',
  title: 'The man who bought the town',
  text: 'Howard Hughes owned 25,000 acres of the valley by the time he died in 1976. This office park at Flamingo and Paradise grew on his land; so did Summerlin, named after his grandmother, out on the western edge.',
  at: { x: 3075, z: 22 },
  hint: 'Fly over the office towers at Flamingo and Paradise.',
  r: 260,
  h: 90,
  test: near({ x: 3075, z: 22 }, 180, 120),
};
