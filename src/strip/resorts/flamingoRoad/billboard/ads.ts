/** One bulletin's copy: a headline, a strapline and its colours. */
export interface Ad {
  bg: string;
  ink: string;
  head: string;
  sub: string;
  band?: string;
}

/** The ads that rotate across Flamingo's bulletins; every name and number is made up. */
export const ADS: Ad[] = [
  { bg: '#ffd400', ink: '#1a1a1a', band: '#1a1a1a', head: 'HURT IN A CRASH?', sub: '702-555-0199 · WE FIGHT · YOU HEAL' },
  { bg: '#1a2a6a', ink: '#ffffff', band: '#ffd400', head: 'PRIME RIB $15.99', sub: 'EVERY NIGHT · LOCALS CASINO · 2 MILES WEST' },
  { bg: '#1a1a1a', ink: '#ffffff', band: '#c8102e', head: 'SHOOT A MACHINE GUN', sub: 'NO EXPERIENCE NEEDED · FREE SHUTTLE' },
  { bg: '#c8e8ff', ink: '#1a2a5a', band: '#e05a1a', head: 'GRAND CANYON BY AIR', sub: 'HELICOPTER TOURS · CHAMPAGNE ON THE RIM' },
  { bg: '#5a1a5a', ink: '#ffffff', band: '#ff5ad0', head: 'MAGIC. TONIGHT.', sub: 'SEE THE IMPOSSIBLE · 7 & 9:30 PM' },
  { bg: '#ffffff', ink: '#c8102e', band: '#c8102e', head: 'IT’S 110°. DRINK WATER.', sub: 'SOUTHERN NEVADA WATER AUTHORITY' },
  { bg: '#ff5a8a', ink: '#ffffff', band: '#ffffff', head: 'MARRIED IN 15 MINUTES', sub: 'ELVIS INCLUDED · LIMO PICKUP · OPEN 24/7' },
];
