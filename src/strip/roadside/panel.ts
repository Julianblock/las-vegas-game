import { fitText, rounded, SANS, type SignSpec } from '../../world/signKit';

export interface PanelSpec {
  bg: string;
  ink: string;
  text: string;
  sub?: string;
  font?: (px: number) => string;
  /** Inner border colour, drawn inset like a backlit cabinet's trim. */
  trim?: string;
  w?: number;
  h?: number;
  /** Extra painting over the ground before the lettering (logos, stripes). */
  under?: (g: CanvasRenderingContext2D, w: number, h: number) => void;
}

/** A backlit roadside cabinet face: ground colour, trim, wordmark and a strapline. */
export function panel(name: string, s: PanelSpec): SignSpec {
  return {
    name,
    w: s.w ?? 512,
    h: s.h ?? 256,
    draw(g, w, h) {
      g.fillStyle = s.bg;
      g.fillRect(0, 0, w, h);
      s.under?.(g, w, h);
      if (s.trim) {
        g.strokeStyle = s.trim;
        g.lineWidth = h * 0.04;
        rounded(g, h * 0.05, h * 0.05, w - h * 0.1, h - h * 0.1, h * 0.08);
        g.stroke();
      }
      g.fillStyle = s.ink;
      const font = s.font ?? ((p: number) => `900 ${p}px ${SANS}`);
      fitText(g, s.text, w / 2, s.sub ? h * 0.44 : h * 0.52, w * 0.86, font, h * (s.sub ? 0.46 : 0.6));
      if (s.sub) fitText(g, s.sub, w / 2, h * 0.8, w * 0.8, (p) => `bold ${p}px ${SANS}`, h * 0.16);
    },
  };
}
