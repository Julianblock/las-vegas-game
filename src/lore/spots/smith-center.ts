import type { Spot } from '../spot';
import { near } from '../tests';

export const smithCenterSpot: Spot = {
  id: 'smith-center',
  kind: 'lore',
  kicker: 'The Smith Center · Symphony Park',
  title: 'Hoover Dam for the opera',
  text: 'The Smith Center opened in March 2012 on the old Union Pacific rail yard. Its limestone tower and bronze trim borrow the Art Deco of Hoover Dam, and the carillon on top rings 47 bells over a city that went eighty years without a real concert hall.',
  at: { x: 3444, z: -5950 },
  hint: 'Go to the Art Deco tower west of the downtown rail line.',
  r: 150,
  h: 50,
  test: near({ x: 3444, z: -5950 }, 110, 50),
};
