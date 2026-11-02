import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { BOW_AND_ARROW, bowAndArrowSign } from './bowAndArrow';
import { CHIEF, chiefSign } from './chief';
import { DICE, diceSign } from './dice';
import { HACIENDA, haciendaSign } from './hacienda';
import { MARTINI, martiniSign } from './martini';
import { SWING, swingSign } from './swing';

export const SIGNS: SignSpec[] = [haciendaSign, bowAndArrowSign, chiefSign, martiniSign, swingSign, diceSign];
export const MOUNTS: Mount[] = [HACIENDA, BOW_AND_ARROW, CHIEF, MARTINI, SWING, DICE];
