import { STRIP_HALF, stripX } from '../../strip/streets';

/** The boulevard closes from Sahara Avenue south to Russell Road. */
const NORTH = -3300;
const SOUTH = 3900;

/** True on the Strip's roadway between the closures, where the crowds walk instead of cars. */
export function onStrip(x: number, z: number) {
  return z > NORTH && z < SOUTH && Math.abs(x - stripX(z)) < STRIP_HALF;
}
