import { FX } from '../../../world/builders';
import { addStyle, addZone } from '../../massStyles';

/** Circus Circus (1968): candy-white towers with pink window light. */
export function circusStyle() {
  const candy = { color: '#f6ecef', rough: 0.7, fx: FX.WINDOWS, wash: 1, seed: 0.37, glowRgb: [1, 0.55, 0.75] as [number, number, number] };
  addStyle(/Circus Circus/i, candy);
  addZone(36.1375, -115.1648, 90, candy, 30);
}
