import type { Resort } from '../../resort';
import { buildArc } from './arc';
import { buildBalloon } from './balloon';
import { buildEiffel } from './eiffel';
import { buildParisFrontage } from './frontage';
import { PARIS_SIGNS } from './signs';
import { parisStyle } from './style';

export const paris: Resort = {
  id: 'paris',
  name: 'Paris Las Vegas',
  signs: PARIS_SIGNS,
  style: parisStyle,
  build(k) {
    buildEiffel(k);
    buildBalloon(k);
    buildArc(k);
    buildParisFrontage(k);
  },
  replaces: (m) => /^(Eiffel Tower|Paris Balloon|Arc de Triomphe)$/.test(m.name),
};
