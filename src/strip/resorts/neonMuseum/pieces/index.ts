import type { Piece } from '../piece';
import { normandie } from './normandie';
import { riviera } from './riviera';
import { caesars } from './caesars';
import { goldenNugget } from './goldenNugget';
import { binions } from './binions';
import { yucca } from './yucca';
import { sahara } from './sahara';
import { moulinRouge } from './moulinRouge';
import { stardust } from './stardust';

/** Everything standing in the Boneyard. */
export const PIECES: Piece[] = [stardust, moulinRouge, sahara, yucca, binions, goldenNugget, caesars, riviera, normandie];
