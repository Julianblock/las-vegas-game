import type { SignSpec } from '../../../world/signKit';

/** A storefront on Fremont East: its sign and where it hangs. */
export interface Bar {
  sign: SignSpec;
  /** Metres down the street from Las Vegas Boulevard. */
  s: number;
  /** +1 south side, -1 north side. */
  side: number;
}
