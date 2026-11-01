import type { Spot } from '../spot';
import { near } from '../tests';

export const venetianSpot: Spot = {
  id: 'venetian',
  kind: 'lore',
  kicker: 'The Venetian, once the Sands · 1952',
  title: 'The Rat Pack’s room',
  text: 'Sinatra, Dean Martin and Sammy Davis Jr. played the Sands’ Copa Room while shooting Ocean’s 11 in 1960. Sheldon Adelson imploded the Sands in 1996 and built Venice in its place: the Rialto, the Doge’s Palace, a campanile and singing gondoliers on a canal.',
  at: { x: 1700, z: -620 },
  hint: 'Fly over the canal and campanile on the east side of the Strip.',
  r: 260,
  h: 90,
  test: near({ x: 1700, z: -620 }, 130, 90),
};
