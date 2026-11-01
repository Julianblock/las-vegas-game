import type { Spot } from '../spot';
import { near } from '../tests';

export const goldCoastSpot: Spot = {
  id: 'gold-coast',
  kind: 'lore',
  kicker: 'Gold Coast · 1986',
  title: 'Where the locals bowl',
  text: 'Michael Gaughan, son of downtown casino man Jackie Gaughan, opened the Gold Coast for people who live here rather than visit: cheap breakfasts, a dance hall and seventy lanes of bowling. His Coast Casinos merged into Boyd Gaming in 2004.',
  at: { x: -234, z: -109 },
  hint: 'Drop low over the gold-trimmed slab on the north side of Flamingo, by the I-15 bridge.',
  r: 220,
  h: 80,
  test: near({ x: -234, z: -109 }, 150, 70),
};
