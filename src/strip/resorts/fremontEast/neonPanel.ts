import { neon, rounded, SANS, type SignSpec } from '../../../world/signKit';

export interface NeonSpec {
  text: string;
  color: string;
  sub?: string;
  subColor?: string;
  font?: (px: number) => string;
}

/** A bar’s blade sign: neon lettering and a neon border on a black cabinet. */
export function neonPanel(name: string, s: NeonSpec): SignSpec {
  return {
    name,
    w: 512,
    h: 192,
    draw(g, w, h) {
      g.fillStyle = '#0a0a0c';
      g.fillRect(0, 0, w, h);
      g.save();
      g.shadowColor = s.color;
      g.shadowBlur = 14;
      g.strokeStyle = s.color;
      g.lineWidth = 6;
      rounded(g, 10, 10, w - 20, h - 20, 18);
      g.stroke();
      g.restore();
      const font = s.font ?? ((p: number) => `900 ${p}px ${SANS}`);
      neon(g, s.text, w / 2, s.sub ? h * 0.42 : h * 0.52, w * 0.84, font, h * (s.sub ? 0.42 : 0.52), s.color);
      if (s.sub) neon(g, s.sub, w / 2, h * 0.78, w * 0.74, (p) => `700 ${p}px ${SANS}`, h * 0.15, s.subColor ?? '#ffffff');
    },
  };
}
