import { fitText, SANS, type SignSpec } from '../../../world/signKit';

/** The RTC stop flag for the 202 Flamingo. */
export const rtc202: SignSpec = {
  name: 'rtc202',
  w: 256,
  h: 192,
  draw(g, w, h) {
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#c8102e';
    g.fillRect(0, 0, w, h * 0.32);
    g.fillStyle = '#ffffff';
    fitText(g, 'RTC', w / 2, h * 0.17, w * 0.8, (p) => `900 ${p}px ${SANS}`, h * 0.24);
    g.fillStyle = '#1a2a5a';
    fitText(g, '202', w / 2, h * 0.56, w * 0.8, (p) => `900 ${p}px ${SANS}`, h * 0.36);
    fitText(g, 'FLAMINGO', w / 2, h * 0.86, w * 0.86, (p) => `bold ${p}px ${SANS}`, h * 0.16);
  },
};

const ADS: { bg: string; ink: string; head: string; sub: string }[] = [
  { bg: '#ffd400', ink: '#1a1a1a', head: 'INJURED?', sub: 'CALL 702-555-0123 · NO FEE UNLESS WE WIN' },
  { bg: '#1a2a6a', ink: '#ffffff', head: 'BUFFET $19.99', sub: 'ALL YOU CAN EAT · LOCALS WELCOME' },
  { bg: '#c8102e', ink: '#ffffff', head: 'HEADLINER', sub: 'TONIGHT ONLY · TICKETS AT THE BOX OFFICE' },
];

/** The shelter’s back panel, cycling an injury lawyer, a buffet and a show. */
export const shelterAd: SignSpec = {
  name: 'shelterAd',
  w: 512,
  h: 256,
  frames: ADS.length,
  draw(g, w, h, f) {
    const a = ADS[f];
    g.fillStyle = a.bg;
    g.fillRect(0, 0, w, h);
    g.fillStyle = a.ink;
    fitText(g, a.head, w / 2, h * 0.42, w * 0.9, (p) => `900 ${p}px ${SANS}`, h * 0.42);
    fitText(g, a.sub, w / 2, h * 0.8, w * 0.9, (p) => `bold ${p}px ${SANS}`, h * 0.11);
  },
};
