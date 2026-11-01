/**
 * Halloween on the Strip: the outfits people wear out on the boulevard on
 * October 31. Shirt and pants colours, plus hair and face overrides
 * (null keeps the person's own).
 */
export interface Costume {
  name: string;
  shirt: string;
  pants: string;
  hair: string | null;
  face: string | null;
}

export const COSTUMES: Costume[] = [
  { name: 'Elvis', shirt: '#f4f0e6', pants: '#f4f0e6', hair: '#0a0a0c', face: null },
  { name: 'Showgirl', shirt: '#e8508a', pants: '#f2c8d8', hair: '#f0d070', face: null },
  { name: 'Witch', shirt: '#141216', pants: '#141216', hair: '#1a1a1a', face: '#8ac070' },
];
