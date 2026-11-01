import type { Spot } from '../spot';

export const skyBeamSpot: Spot = {
  id: 'sky-beam',
  kind: 'secret',
  kicker: 'High above the Strip · night',
  title: 'A searchlight for the stars',
  text: 'From up here the Luxor beam stands straight up out of the glow of the whole valley. Pilots say you can see it from 275 miles out, and the moths and bats that feed in it have become their own tiny ecosystem.',
  at: { x: 1260, z: 2278 },
  hint: 'Climb above 500 m over the south Strip on a clear night.',
  r: 1400,
  h: 800,
  night: true,
  test: (s) => s.night > 0.7 && s.agl > 480 && !s.driving && Math.hypot(s.pos.x - 1260, s.pos.z - 2278) < 3000,
};
