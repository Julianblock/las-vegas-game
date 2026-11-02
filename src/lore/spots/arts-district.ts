import type { Spot } from '../spot';
import { near } from '../tests';

export const artsDistrictSpot: Spot = {
  id: 'arts-district',
  kind: 'lore',
  kicker: '18b Arts District · Main and Charleston',
  title: 'First Friday',
  text: 'The blocks around Main and Charleston were furniture stores and pawn shops until artists moved in. Since 2002 First Friday has closed the streets one night a month for galleries, food trucks and street music.',
  at: { x: 3280, z: -4761 },
  hint: 'Go to Main Street and Charleston, south of downtown.',
  r: 150,
  h: 50,
  test: near({ x: 3280, z: -4761 }, 110, 50),
};
