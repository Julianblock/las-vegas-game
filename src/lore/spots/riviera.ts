import type { Spot } from '../spot';
import { ll, near } from '../tests';

export const rivieraSpot: Spot = {
  id: 'riviera',
  kind: 'lore',
  kicker: 'The Riviera · 1955–2016',
  title: 'Nine storeys tall',
  text: 'The Riv was the first high-rise on the Strip, opened in 1955 by Liberace, paid $50,000 a week. It played Casino and Showgirls and lasted sixty years. Its ground is now the convention centre’s West Hall.',
  at: ll(36.1356, -115.1626),
  hint: 'Fly over the convention hall east of Resorts World.',
  r: 260,
  h: 90,
  test: near(ll(36.1356, -115.1626), 160, 90),
};
