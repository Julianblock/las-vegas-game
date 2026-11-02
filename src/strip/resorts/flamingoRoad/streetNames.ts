import { fitText, rounded, SANS, type SignSpec } from '../../../world/signKit';

/** Green street-name blades over Flamingo’s intersections, by cross street. */
export const NAMES: Record<string, string> = {
  decatur: 'S Decatur Blvd',
  arville: 'S Arville St',
  wynn: 'S Wynn Rd',
  valleyView: 'S Valley View Blvd',
  koval: 'Koval Ln',
  hughesParkway: 'Howard Hughes Pkwy',
  paradise: 'Paradise Rd',
  maryland: 'S Maryland Pkwy',
};

/** The blade for a street: white letters on highway green with a white border. */
export function blade(id: string, text: string): SignSpec {
  return {
    name: `street_${id}`,
    w: 512,
    h: 96,
    draw(g, w, h) {
      g.fillStyle = '#0a6a3a';
      g.fillRect(0, 0, w, h);
      g.strokeStyle = '#ffffff';
      g.lineWidth = 4;
      rounded(g, 5, 5, w - 10, h - 10, 8);
      g.stroke();
      g.fillStyle = '#ffffff';
      fitText(g, text, w / 2, h * 0.54, w * 0.9, (p) => `bold ${p}px ${SANS}`, h * 0.62);
    },
  };
}

export const FLAMINGO_BLADES = [blade('flamingoW', 'W Flamingo Rd'), blade('flamingoE', 'E Flamingo Rd')];
export const CROSS_BLADES = Object.entries(NAMES).map(([id, t]) => blade(id, t));
