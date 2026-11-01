import { fitText, SANS, type SignSpec } from '../../world/signKit';

/** Red seven-segment fuel prices under every station's brand panel (October 2026 Las Vegas prices). */
export const fuelPrices: SignSpec = {
  name: 'fuelPrices',
  w: 384,
  h: 256,
  draw(g, w, h) {
    g.fillStyle = '#0c0c0c';
    g.fillRect(0, 0, w, h);
    const rows: [string, string][] = [['REGULAR', '4.29⁹'], ['PLUS', '4.49⁹'], ['PREMIUM', '4.69⁹'], ['DIESEL', '4.89⁹']];
    rows.forEach(([grade, price], i) => {
      const y = h * (0.15 + i * 0.235);
      g.fillStyle = '#ffffff';
      fitText(g, grade, w * 0.22, y, w * 0.38, (p) => `bold ${p}px ${SANS}`, h * 0.12);
      g.fillStyle = '#ff2a1a';
      g.shadowColor = '#ff2a1a';
      g.shadowBlur = 6;
      fitText(g, price, w * 0.7, y, w * 0.52, (p) => `bold ${p}px "Courier New", monospace`, h * 0.2);
      g.shadowBlur = 0;
    });
  },
};
