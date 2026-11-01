import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';

/** Crown lettering on the Venetian and Palazzo towers. */
export function buildVenetianCrowns(k: Kit) {
  k.sign(k.frame(1832, -631.5, 0), 'venetianCrown', 0, 135, 0.6, 10, 1.4, FX.NEON);
  k.sign(k.frame(1832, -598.5, 180), 'venetianCrown', 0, 135, 0.6, 10, 1.4, FX.NEON);
  k.sign(k.frame(1996.5, -937, 270), 'palazzoCrown', 0, 186, 0.6, 6.2, 1.4, FX.NEON);
  k.beacons(k.frame(1832, -615, 0), 0, 0, 90, 145);
  k.beacons(k.frame(2010, -910, 0), 0, 0, 60, 196);
}
