import { FX } from '../world/builders';
import type { OsmMass } from '../world/meta';

/** How an extruded building is painted and lit. */
export interface MassStyle {
  color: string;
  rough: number;
  fx: number;
  /** Night floodlight wash strength (0 = dark walls, rooms still light up). */
  wash: number;
  /** Shader seed: integer part varies the room lights, fraction picks the wash hue (negative = warm white). */
  seed: number;
  /** Linear colour the lit facade throws on nearby water. */
  glowRgb: [number, number, number];
}

/** One resort's look, matched on the OSM name of the building or its parts. */
export interface StyleRule {
  match: RegExp;
  style: Partial<MassStyle>;
}

/** Resort facades, most specific first. Each landmark module adds its own. */
export const RULES: StyleRule[] = [];

/** Registers a resort's facade style. */
export function addStyle(match: RegExp, style: Partial<MassStyle>) {
  RULES.push({ match, style });
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return ((h >>> 0) % 1000) / 1000;
}

/** Fallback by size: stucco boxes, cream hotel towers, grey garages. */
function fallback(m: OsmMass): MassStyle {
  const k = hash(m.name + m.pts[0]);
  if (m.garage) return { color: '#a9a49b', rough: 0.9, fx: FX.BALCONY, wash: 0, seed: 7 + k, glowRgb: [0, 0, 0] };
  if (m.h >= 24) {
    const towers = ['#e9e2d2', '#ddd3bf', '#d9d6cf', '#c9bfae', '#e4dccb', '#b9b4aa'];
    return { color: m.colour || towers[Math.floor(k * towers.length)], rough: 0.7, fx: k < 0.3 ? FX.GLASS : FX.WINDOWS, wash: 0.8, seed: -(3 + k), glowRgb: [1, 0.8, 0.6] };
  }
  const low = ['#d8c8ac', '#cdb99a', '#e2d6c0', '#c4b294', '#bfb6a4', '#d2c2a6'];
  return { color: m.colour || low[Math.floor(k * low.length)], rough: 0.85, fx: m.h > 9 ? FX.WASH : 0, wash: 0, seed: 11 + k, glowRgb: [0, 0, 0] };
}

export function styleFor(m: OsmMass): MassStyle {
  const base = fallback(m);
  for (const r of RULES) if (r.match.test(m.name)) return { ...base, ...r.style };
  return base;
}
