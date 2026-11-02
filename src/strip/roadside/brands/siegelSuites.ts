import type { Brand } from '../brand';
import { panel } from '../panel';

/** Weekly rooms in a converted motel. */
export const siegelSuites: Brand = {
  id: 'siegelSuites',
  match: /^Siegel Suites/,
  pole: 'tall',
  color: '#1a1a1a',
  free: true,
  sign: panel('brand_siegelSuites', {
    bg: '#1a2a4a',
    ink: '#ffffff',
    text: 'Siegel Suites',
    sub: 'WEEKLY RATES',
    trim: '#c8a040',
  }),
};
