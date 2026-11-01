import { SERIF } from '../../../world/signKit';
import type { Brand } from '../brand';
import { panel } from '../panel';

/** Farmer Boys, farm-fresh burgers from the Inland Empire. */
export const farmerBoys: Brand = {
  id: 'farmerBoys',
  match: /^Farmer Boys/,
  pole: 'tall',
  color: '#c8102e',
  sign: panel('brand_farmerBoys', {
    bg: '#ffffff',
    ink: '#c8102e',
    text: 'Farmer Boys',
    sub: 'FARM FRESH BURGERS',
    trim: '#2a6a2a',
    font: (p) => `bold italic ${p}px ${SERIF}`,
  }),
};
