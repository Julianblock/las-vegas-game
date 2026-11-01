/**
 * Where the grandstands go: centre distance along the circuit (m), length,
 * tiers, and side (+1 left of the racing direction, −1 right).
 */
export interface Stand {
  name: string;
  s: number;
  len: number;
  rows: number;
  side: number;
}

export const STANDS: Stand[] = [
  { name: 'Main Grandstand', s: 40, len: 150, rows: 18, side: -1 },
  { name: 'Koval Zone', s: 1300, len: 90, rows: 12, side: -1 },
  { name: 'Sphere Zone', s: 1960, len: 60, rows: 14, side: -1 },
  { name: 'Flamingo Zone', s: 4380, len: 110, rows: 12, side: 1 },
  { name: 'Bellagio Fountain Club', s: 4560, len: 120, rows: 8, side: -1 },
  { name: 'Harmon Zone', s: 5400, len: 100, rows: 12, side: -1 },
];
