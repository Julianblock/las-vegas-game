import { rect, type Haunt } from './haunt';

/** The Wengert house’s collection. */
export const hauntedMuseum: Haunt = {
  id: 'ghost-hauntedMuseum',
  kind: 'secret',
  kicker: 'Zak Bagans’ Haunted Museum · East Charleston',
  title: 'The house that collects curses',
  text: 'The 1938 Wengert mansion on Charleston became Zak Bagans’ Haunted Museum in 2017. It holds the Dybbuk Box, Bela Lugosi’s mirror and Dr Kevorkian’s death van. Visitors have to sign a waiver, and staff talk about a woman in a long dress on the basement stairs.',
  ground: rect(3990, -4750, 4040, -4705),
  count: 2,
  hint: 'Hover outside the old mansion on East Charleston after dark.',
  r: 55,
  h: 14,
};
