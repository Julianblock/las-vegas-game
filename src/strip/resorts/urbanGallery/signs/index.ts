import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { BOW_AND_ARROW, bowAndArrowSign } from './bowAndArrow';
import { CHIEF, chiefSign } from './chief';
import { HACIENDA, haciendaSign } from './hacienda';
import { MARTINI, martiniSign } from './martini';

export const SIGNS: SignSpec[] = [haciendaSign, bowAndArrowSign, chiefSign, martiniSign];
export const MOUNTS: Mount[] = [HACIENDA, BOW_AND_ARROW, CHIEF, MARTINI];
