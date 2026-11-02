import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

export interface Mount {
  name: string;
  x: number;
  z: number;
  /** Compass bearing the sign's face looks toward. */
  deg: number;
  /** Height of the sign face (m) and of its bottom edge above the ground. */
  h: number;
  lift: number;
}

/** A restored sign on a single steel mast, readable from both ways down the street. */
export function mount(k: Kit, m: Mount) {
  const fr = k.frame(m.x, m.z, m.deg);
  k.box(fr, 0, -0.4, 0, 1.4, 0.6, 1.4, '#8a8478', { rough: 0.9 });
  k.cyl(fr, 0, 0, 0, 0.3, 0.22, m.lift + 0.4, '#3c3c40', { rough: 0.5 });
  k.sign(fr, m.name, 0, m.lift + m.h / 2, 0, m.h, 1.3, FX.NEON, 0, true);
}
