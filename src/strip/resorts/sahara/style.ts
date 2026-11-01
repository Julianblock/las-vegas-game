import { FX } from '../../../world/builders';
import { addZone } from '../../massStyles';

/** Sahara (1952, remade 2019): cream towers with warm desert-gold window light. */
export function saharaStyle() {
  addZone(36.1420, -115.1566, 170, { color: '#eadfc8', rough: 0.75, fx: FX.WINDOWS, wash: 1, seed: 0.21, glowRgb: [1, 0.78, 0.45] }, 15);
}
