import type { Piece } from '../piece';
import { fitzgeralds } from './fitzgeralds';
import { desertRose } from './desertRose';
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
export const PIECES: Piece[] = [stardust, moulinRouge, sahara, yucca, binions, goldenNugget, caesars, riviera, normandie, desertRose, fitzgeralds];
