import type { Frame } from '../../../world/builders';
import type { SignSpec } from '../../../world/signKit';
import type { Kit } from '../../kit';

/** One retired sign or sculpture standing in the Boneyard. */
export interface Piece {
  sign?: SignSpec;
  build(k: Kit, fr: Frame): void;
}
