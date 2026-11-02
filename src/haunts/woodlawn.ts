import { rect, type Haunt } from './haunt';

/** The pioneers of Woodlawn. */
export const woodlawn: Haunt = {
  id: 'ghost-woodlawn',
  kind: 'secret',
  kicker: 'Woodlawn Cemetery · North Las Vegas Blvd',
  title: 'The founders’ hill',
  text: 'Woodlawn opened in 1914, when Las Vegas was a railroad town of a few hundred people. The ranchers, railroad men and early casino bosses who built the city are buried under its old trees, and the caretakers say some of them still walk the rows at dusk.',
  ground: rect(5090, -7650, 5420, -7300),
  count: 4,
  hint: 'Wander the old cemetery up North Las Vegas Boulevard at night.',
  r: 140,
  h: 40,
};
