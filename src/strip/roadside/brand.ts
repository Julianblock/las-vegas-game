import type { SignSpec } from '../../world/signKit';

/** How a brand stands at the roadside. */
export type PoleKind = 'tall' | 'monument' | 'fuel' | 'arches';

/**
 * One chain's roadside identity: which OSM POIs it claims (by brand tag or
 * name), the sign panel painted for it, and the kind of pole it stands on.
 */
export interface Brand {
  id: string;
  match: RegExp;
  sign: SignSpec;
  pole: PoleKind;
  /** Pole and cabinet colour. */
  color: string;
  /** Panel height (m); panels keep their painted aspect. */
  h?: number;
  /** Signed even where the map has no building footprint (local landmarks in strip malls). */
  free?: boolean;
}
