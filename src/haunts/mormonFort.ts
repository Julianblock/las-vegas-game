import { rect, type Haunt } from './haunt';

/** Missionaries at the fort. */
export const mormonFort: Haunt = {
  id: 'ghost-mormon-fort',
  kind: 'secret',
  kicker: 'Old Mormon Fort · after dark',
  title: 'Adobe walls',
  text: 'In 1855 Mormon missionaries built an adobe fort by the creek that gave Las Vegas its name, the meadows. It is the oldest building in Nevada. Rangers closing up at dusk tell of footsteps in the adobe, and figures in wide hats at the ditch where the spring once ran.',
  ground: rect(5045, -7200, 5110, -7130),
  count: 3,
  hint: 'Drop in at the Old Mormon Fort on Las Vegas Boulevard North after dark.',
  r: 60,
  h: 16,
};
