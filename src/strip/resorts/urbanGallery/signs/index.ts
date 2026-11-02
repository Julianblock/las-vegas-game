import type { SignSpec } from '../../../../world/signKit';
import type { Mount } from '../pole';
import { BOW_AND_ARROW, bowAndArrowSign } from './bowAndArrow';
import { CHIEF, chiefSign } from './chief';
import { HACIENDA, haciendaSign } from './hacienda';

export const SIGNS: SignSpec[] = [haciendaSign, bowAndArrowSign, chiefSign];
export const MOUNTS: Mount[] = [HACIENDA, BOW_AND_ARROW, CHIEF];
