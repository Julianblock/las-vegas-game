/**
 * Joins mapped way pieces into one long line, growing `seed` forward from its
 * end and back from its start, each time taking the longest unused piece
 * that continues it.
 */
export function chain(ways: number[][], seed: number[], snap = 4): number[] {
  const used = new Set<number[]>([seed]);
  const out = seed.slice();
  const pick = (x: number, z: number, atEnd: boolean) => {
    let best: number[] | null = null;
    for (const w of ways) {
      if (used.has(w)) continue;
      const px = atEnd ? w[0] : w[w.length - 2];
      const pz = atEnd ? w[1] : w[w.length - 1];
      if (Math.hypot(px - x, pz - z) > snap) continue;
      if (!best || w.length > best.length) best = w;
    }
    if (best) used.add(best);
    return best;
  };
  for (let w; (w = pick(out[out.length - 2], out[out.length - 1], true)); ) out.push(...w.slice(2));
  for (let w; (w = pick(out[0], out[1], false)); ) out.unshift(...w.slice(0, -2));
  return out;
}
