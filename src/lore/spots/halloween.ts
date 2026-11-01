import type { Spot } from '../spot';

export const halloweenSpot: Spot = {
  id: 'halloween',
  kind: 'secret',
  kicker: 'The Strip · 31 October',
  title: 'Trick or treat',
  text: 'Halloween night on the Strip: witches on the pedestrian bridges, zombies in the Bellagio queue and an Elvis on every corner. It is the one night a year nobody stares at the costumes.',
  at: { x: 1540, z: 400 },
  hint: 'Fly low over the Strip after dark on Halloween.',
  r: 500,
  h: 120,
  night: true,
  test: (s) => s.night > 0.5 && s.agl < 60 && Math.abs(s.pos.x - 1540) < 120 && Math.abs(s.pos.z - 400) < 1600 && new Date().getMonth() === 9 && new Date().getDate() >= 24,
};
