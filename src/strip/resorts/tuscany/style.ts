import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Tuscany Suites (2001): three-storey villas in terracotta and ochre around a lagoon pool. */
export function tuscanyStyle() {
  addZone(36.11597, -115.16310, 150, { color: '#c98a5a', rough: 0.85, fx: FX.WINDOWS, wash: 0.8, seed: -0.08, glowRgb: [1, 0.78, 0.5] }, 8);
}
