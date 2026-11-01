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
  { name: 'Skeleton', shirt: '#101010', pants: '#101010', hair: '#f0eee8', face: '#f0eee8' },
  { name: 'Vampire', shirt: '#1a0a0c', pants: '#0c0c0e', hair: '#0a0a0c', face: '#e8e2e0' },
  { name: 'Pumpkin', shirt: '#f07a18', pants: '#1a3a12', hair: null, face: null },
  { name: 'Ghost', shirt: '#f4f4f2', pants: '#f4f4f2', hair: '#f4f4f2', face: '#f4f4f2' },
  { name: 'Superhero', shirt: '#1a3aa8', pants: '#c81a1a', hair: null, face: null },
  { name: 'Zombie', shirt: '#5a5a3a', pants: '#3a3226', hair: '#2a2a1a', face: '#8a9a6a' },
  { name: 'Devil', shirt: '#b8101a', pants: '#b8101a', hair: '#600408', face: '#d84030' },
  { name: 'Pirate', shirt: '#f0e8d8', pants: '#2a1a12', hair: '#1a0e08', face: null },
  { name: 'Mummy', shirt: '#e0d6bc', pants: '#e0d6bc', hair: '#e0d6bc', face: '#e0d6bc' },
  { name: 'Black cat', shirt: '#0e0e10', pants: '#0e0e10', hair: '#0e0e10', face: null },
  { name: 'Banana', shirt: '#f4d828', pants: '#f4d828', hair: '#f4d828', face: null },
  { name: 'Wizard', shirt: '#2a1a6a', pants: '#2a1a6a', hair: '#c8c8d0', face: null },
];
