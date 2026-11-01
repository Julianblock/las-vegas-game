/** A team's paint: main body, accent stripe, and wing colour. */
export interface Livery {
  team: string;
  body: string;
  accent: string;
  wing: string;
}

/** The 2026 grid: eleven teams, two cars each, roughly in championship order. */
export const LIVERIES: Livery[] = [
  { team: 'McLaren', body: '#ff7a00', accent: '#1b1d22', wing: '#1b1d22' },
  { team: 'Ferrari', body: '#d4061b', accent: '#ffe100', wing: '#1a1a1a' },
  { team: 'Red Bull', body: '#1d2a59', accent: '#e4002b', wing: '#ffcc00' },
  { team: 'Mercedes', body: '#1a1c1f', accent: '#00d2be', wing: '#c0c4c8' },
  { team: 'Williams', body: '#0a2a6b', accent: '#00a3e0', wing: '#0a2a6b' },
  { team: 'Aston Martin', body: '#00594f', accent: '#cedc00', wing: '#00352f' },
  { team: 'Racing Bulls', body: '#f2f3f5', accent: '#1534cc', wing: '#e30613' },
  { team: 'Haas', body: '#f4f4f4', accent: '#b6babd', wing: '#da291c' },
  { team: 'Alpine', body: '#0b62d6', accent: '#ff87bc', wing: '#0a1a3a' },
  { team: 'Audi', body: '#8f9497', accent: '#bb0a30', wing: '#1c1c1c' },
  { team: 'Cadillac', body: '#121212', accent: '#e9e9e9', wing: '#121212' },
];
