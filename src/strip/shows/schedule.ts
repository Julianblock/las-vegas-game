/**
 * When a recurring show is on. Bellagio runs every 30 minutes in the afternoon
 * and every 15 after dark; flying at game pace we compress that so a pass down
 * the Strip usually catches one. Returns seconds into the current show, or -1.
 */
export function showTime(clock: number, night: number, length: number, dayEvery: number, nightEvery: number, offset = 0) {
  const every = night > 0.5 ? nightEvery : dayEvery;
  const t = (clock + offset) % every;
  return t < length ? t : -1;
}
