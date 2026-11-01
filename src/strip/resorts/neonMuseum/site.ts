import type { Kit } from '../../kit';

/**
 * The Neon Museum's outdoor Boneyard on Las Vegas Boulevard North, between
 * the boulevard and Encanto Drive, north of the La Concha visitor centre.
 * Local +z runs north-northwest up the boulevard; local -x faces it.
 */
export const BONEYARD = { x: 4915, z: -6712, deg: 335, hw: 28, hd: 32 };

export function boneyardFrame(k: Kit) {
  return k.frame(BONEYARD.x, BONEYARD.z, BONEYARD.deg, BONEYARD.hw, BONEYARD.hd);
}
