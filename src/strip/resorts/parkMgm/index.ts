import { FX } from '../../../world/builders';
import { addStyle } from '../../massStyles';
import type { Resort } from '../../resort';
import { parkCrown } from './signs';

/**
 * Park MGM (1996 as the Monte Carlo): the tower re-clad in cream and dark
 * bronze, NoMad on its top floors, its name on the Strip face and the back.
 */
export const parkMgm: Resort = {
  id: 'parkMgm',
  name: 'Park MGM',
  signs: [parkCrown],
  style() {
    addStyle(/^Park MGM$/, { color: '#e2d8c4', rough: 0.7, fx: FX.WINDOWS, wash: 1, seed: -0.22, glowRgb: [1, 0.85, 0.65] });
  },
  build(k) {
    k.sign(k.frame(1311.5, 1253, 90), 'parkCrown', 0, 100, 0.6, 5, 1.35, FX.NEON);
    k.sign(k.frame(1166.5, 1253, 270), 'parkCrown', 0, 100, 0.6, 5, 1.35, FX.NEON);
  },
};
