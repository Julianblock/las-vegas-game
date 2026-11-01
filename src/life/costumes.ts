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
];
