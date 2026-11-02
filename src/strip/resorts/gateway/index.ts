import type { Resort } from '../../resort';
import { buildArches } from './arches';
import { gatewaySign } from './sign';

/** The Gateway Arches over Las Vegas Boulevard at the edge of downtown. */
export const gateway: Resort = {
  id: 'gateway',
  name: 'Las Vegas Boulevard Gateway Arches',
  signs: [gatewaySign],
  build: buildArches,
};
