import { fitText, SANS, SCRIPT, type SignSpec } from '../../../world/signKit';
import { bulbBorder } from '../../paint/marquee';

function diamond(g: CanvasRenderingContext2D, w: number, h: number, inset: number) {
  g.beginPath();
  g.moveTo(w / 2, inset);
  g.lineTo(w - inset, h * 0.5);
  g.lineTo(w / 2, h - inset);
  g.lineTo(inset, h * 0.5);
  g.closePath();
}

/** The lozenge's ground, border and bulb chase, shared by both faces. */
function ground(g: CanvasRenderingContext2D, w: number, h: number, frame: number) {
  diamond(g, w, h, 4);
  g.fillStyle = '#c8c8c8';
  g.fill();
  diamond(g, w, h, 16);
  g.fillStyle = '#fbfbf2';
  g.fill();
  g.save();
  diamond(g, w, h, 16);
  g.clip();
  bulbBorder(g, 22, h * 0.27, w - 44, h * 0.46, 22, '#fff6c0', '#c8c0a0', frame);
  g.restore();
}

/**
 * Betty Willis's sign (1959), never copyrighted: WELCOME on seven silver
 * dollars, "to Fabulous" in blue script, LAS VEGAS in red, NEVADA beneath,
 * a bulb-ringed lozenge. Two frames chase its bulbs.
 */
export const welcomeFront: SignSpec = {
  name: 'welcomeFront',
  w: 768,
  h: 512,
  frames: 2,
  cutout: true,
  draw(g, w, h, frame) {
    ground(g, w, h, frame);
    const letters = 'WELCOME';
    for (let i = 0; i < letters.length; i++) {
      const x = w * (0.23 + i * 0.09);
      const y = h * 0.3;
      g.fillStyle = '#e8e8e8';
      g.beginPath();
      g.arc(x, y, h * 0.045, 0, Math.PI * 2);
      g.fill();
      g.strokeStyle = '#8a8a8a';
      g.lineWidth = 2;
      g.stroke();
      g.fillStyle = '#c8202a';
      fitText(g, letters[i], x, y + 1, h * 0.07, (p) => `900 ${p}px ${SANS}`, h * 0.07);
    }
    g.fillStyle = '#1a4aa8';
    fitText(g, 'to Fabulous', w / 2, h * 0.41, w * 0.4, (p) => `${p}px ${SCRIPT}`, h * 0.09);
    g.fillStyle = '#d0202a';
    fitText(g, 'LAS VEGAS', w / 2, h * 0.54, w * 0.62, (p) => `900 ${p}px ${SANS}`, h * 0.15);
    g.fillStyle = '#1a4aa8';
    fitText(g, 'NEVADA', w / 2, h * 0.68, w * 0.3, (p) => `bold ${p}px ${SANS}`, h * 0.07);
  },
};

export const welcomeBack: SignSpec = {
  name: 'welcomeBack',
  w: 768,
  h: 512,
  frames: 2,
  cutout: true,
  draw(g, w, h, frame) {
    ground(g, w, h, frame);
    g.fillStyle = '#1a4aa8';
    fitText(g, 'Drive', w / 2, h * 0.38, w * 0.3, (p) => `${p}px ${SCRIPT}`, h * 0.1);
    fitText(g, 'Carefully', w / 2, h * 0.5, w * 0.44, (p) => `${p}px ${SCRIPT}`, h * 0.12);
    g.fillStyle = '#d0202a';
    fitText(g, 'Come Back Soon', w / 2, h * 0.64, w * 0.5, (p) => `${p}px ${SCRIPT}`, h * 0.1);
  },
};

/** The eight-pointed red star with its yellow core on top. */
export const welcomeStar: SignSpec = {
  name: 'welcomeStar',
  w: 256,
  h: 256,
  cutout: true,
  draw(g, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    g.fillStyle = '#e02020';
    g.beginPath();
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 ? w * 0.18 : w * 0.48;
      g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    }
    g.closePath();
    g.fill();
    g.fillStyle = '#ffd23a';
    g.beginPath();
    g.arc(cx, cy, w * 0.12, 0, Math.PI * 2);
    g.fill();
  },
};
