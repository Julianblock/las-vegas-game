import { fitText, SANS } from '../../world/signKit';

/**
 * A full-colour LED marquee screen: a gradient ground, a headline and a
 * subline, one slide per frame. Slides cycle as the shader steps frames.
 */
export interface Slide {
  bg: [string, string];
  head: string;
  sub?: string;
  ink?: string;
  font?: (px: number) => string;
}

export function screen(g: CanvasRenderingContext2D, w: number, h: number, s: Slide) {
  const grad = g.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, s.bg[0]);
  grad.addColorStop(1, s.bg[1]);
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  g.fillStyle = s.ink ?? '#ffffff';
  const font = s.font ?? ((p: number) => `900 ${p}px ${SANS}`);
  fitText(g, s.head, w / 2, s.sub ? h * 0.42 : h / 2, w * 0.9, font, h * (s.sub ? 0.36 : 0.5));
  if (s.sub) {
    g.globalAlpha = 0.85;
    fitText(g, s.sub, w / 2, h * 0.78, w * 0.86, (p) => `bold ${p}px ${SANS}`, h * 0.15);
    g.globalAlpha = 1;
  }
  // Pixel pitch: faint scanlines so it reads as a screen, not paint.
  g.fillStyle = 'rgba(0,0,0,0.18)';
  for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 1);
}
