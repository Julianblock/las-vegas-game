import type { SignSpec } from '../../world/signKit';
import { fitText } from '../../world/signKit';
import { GROTESK } from '../../strip/paint/fonts';

/** Atlas name of a station's board. */
export const boardName = (station: string) => 'mono-' + station.toLowerCase().replace(/[^a-z]+/g, '-');

/** A station name board: the line's blue band with the station in white. */
export function board(station: string): SignSpec {
  return {
    name: boardName(station),
    w: 1024,
    h: 128,
    draw(g, w, h) {
      g.fillStyle = '#0a3a8a';
      g.fillRect(0, 0, w, h);
      g.fillStyle = '#ffd200';
      g.fillRect(0, h * 0.84, w, h * 0.16);
      g.fillStyle = '#ffffff';
      fitText(g, station.toUpperCase(), w / 2, h * 0.46, w * 0.9, (p) => `bold ${p}px ${GROTESK}`, h * 0.56);
    },
  };
}
