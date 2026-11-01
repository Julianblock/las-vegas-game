import type { Piece } from '../piece';
import { yucca } from './yucca';
import { sahara } from './sahara';
import { moulinRouge } from './moulinRouge';
import { stardust } from './stardust';

/** Everything standing in the Boneyard. */
export const PIECES: Piece[] = [stardust, moulinRouge, sahara, yucca];
