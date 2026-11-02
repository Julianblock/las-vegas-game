/** Spring Mountain Road's centre line through Chinatown, west to east (x, z). */
export const SPRING_MOUNTAIN: [number, number][] = [
  [-1520, -1140],
  [-900, -1146],
  [-500, -1155],
  [-100, -1166],
];

/** Lantern poles stand this far either side of the centre line (m). */
export const KERB = 17;

/** The road's centre z at `x`, between the ends of the Chinatown stretch. */
export function roadZ(x: number) {
  const p = SPRING_MOUNTAIN;
  for (let i = 1; i < p.length; i++) {
    if (x <= p[i][0]) {
      const t = (x - p[i - 1][0]) / (p[i][0] - p[i - 1][0]);
      return p[i - 1][1] + (p[i][1] - p[i - 1][1]) * t;
    }
  }
  return p[p.length - 1][1];
}
