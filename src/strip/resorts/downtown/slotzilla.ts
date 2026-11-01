import { neon, type SignSpec } from '../../../world/signKit';
import { BLACK } from '../../../world/signKit';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { FREMONT, onFremont } from './fremont';

/** The giant slot machine's marquee. */
export const slotzillaSign: SignSpec = {
  name: 'slotzillaSign',
  w: 512,
  h: 160,
  cutout: true,
  draw(g, w, h) {
    neon(g, 'SLOTZILLA', w / 2, h * 0.55, w * 0.92, (p) => `${p}px ${BLACK}`, h * 0.66, '#ffd21a');
  },
};

/**
 * SlotZilla (2014): an eleven-storey slot machine at the east end of the
 * canopy, launching zipliners down Fremont Street beneath the LEDs.
 */
export function buildSlotzilla(k: Kit) {
  const p = onFremont(onFremont(0).len - 18);
  const fr = k.frame(p.x, p.z, FREMONT.bearing + 180, 8, 6);
  k.box(fr, 0, 0, 0, 14, 30, 9, '#b0101a', { rough: 0.4, fx: FX.METAL });
  k.box(fr, 0, 12, 4.6, 11, 9, 0.3, '#111111', { rough: 0.3 });
  for (const x of [-3.6, 0, 3.6]) k.box(fr, x, 13, 4.8, 3.2, 7, 0.2, '#f4f0e0', { glow: 1.1 });
  k.box(fr, 0, 30, 0, 16, 5, 10, '#d4af37', { rough: 0.4, fx: FX.METAL });
  k.sign(fr, 'slotzillaSign', 0, 32.5, 5.1, 4.2, 1.5, FX.NEON);
  k.box(fr, 9, 4, 0, 1.2, 26, 1.2, '#c0c0c0', { rough: 0.5 });
  k.cyl(fr, 9, 30, 0, 1.4, 0.4, 6, '#d4af37', { rough: 0.4 });
}
