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
