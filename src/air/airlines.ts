/** An airline's paint: fuselage top and belly, cheatline, tail and engine colours. */
export interface Airline {
  name: string;
  top: string;
  belly: string;
  stripe: string;
  tail: string;
  engine: string;
}

/**
 * Who flies into Las Vegas. Southwest runs more flights here than anyone,
 * so it gets the most airframes in the rotation.
 */
export const AIRLINES: Airline[] = [
  { name: 'Southwest', top: '#304cb2', belly: '#c8102e', stripe: '#ffbf27', tail: '#304cb2', engine: '#304cb2' },
  { name: 'Southwest', top: '#304cb2', belly: '#c8102e', stripe: '#ffbf27', tail: '#304cb2', engine: '#c0c4c8' },
  { name: 'Southwest', top: '#304cb2', belly: '#c8102e', stripe: '#ffbf27', tail: '#c8102e', engine: '#304cb2' },
  { name: 'Allegiant', top: '#f4f4f4', belly: '#f4f4f4', stripe: '#f39c12', tail: '#0a3a6a', engine: '#f4f4f4' },
  { name: 'Spirit', top: '#ffec00', belly: '#ffec00', stripe: '#111111', tail: '#ffec00', engine: '#111111' },
  { name: 'Delta', top: '#f4f4f4', belly: '#1a2a4a', stripe: '#c8102e', tail: '#1a2a4a', engine: '#c8102e' },
  { name: 'United', top: '#f4f4f4', belly: '#5a6a7a', stripe: '#0a3a8a', tail: '#0a2a6a', engine: '#0a2a6a' },
  { name: 'American', top: '#c8ccd0', belly: '#9aa0a6', stripe: '#c8102e', tail: '#0a3a8a', engine: '#c8ccd0' },
  { name: 'Alaska', top: '#f4f4f4', belly: '#f4f4f4', stripe: '#00a3e0', tail: '#0a2a4a', engine: '#0a2a4a' },
  { name: 'Frontier', top: '#f4f4f4', belly: '#f4f4f4', stripe: '#2a8a3a', tail: '#2a8a3a', engine: '#2a8a3a' },
];
