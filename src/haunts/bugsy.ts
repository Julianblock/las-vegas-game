import { rect, type Haunt } from './haunt';

/** Bugsy Siegel in the Flamingo's garden, by his memorial plaque and the flamingo ponds. */
export const bugsy: Haunt = {
  id: 'ghost-bugsy',
  kind: 'secret',
  kicker: 'Flamingo garden \u00b7 after dark',
  title: 'Mr. Siegel is in the garden',
  text: 'A man in a sharp overcoat and fedora strolls between the flamingo ponds, cigar glowing, and is gone before you reach him. Staff have reported him for decades, near the plaque that bears his name, where his private suite once stood.',
  ground: rect(1688, -118, 1732, -66),
  count: 1,
  hint: 'Come back to the garden behind the Flamingo after dark and fly in low.',
  r: 60,
  h: 16,
};
