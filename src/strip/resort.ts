import type { OsmMass } from '../world/meta';
import type { SignSpec } from '../world/signKit';
import type { Kit } from './kit';

/**
 * One resort, attraction or street landmark on the corridor. Each lives in its
 * own module under strip/resorts and contributes any of: painted signs for the
 * atlas, facade styles for its extruded OSM towers, hand-built detail, and the
 * OSM masses it models itself instead.
 */
export interface Resort {
  id: string;
  name: string;
  signs?: SignSpec[];
  /** Registers facade styles (addStyle / addZone) before the masses are extruded. */
  style?(): void;
  /** Hand-built detail: signs, crowns, porte-cochères, palms, features. */
  build?(k: Kit): void;
  /** True for OSM masses this resort builds by hand. */
  replaces?(m: OsmMass, x: number, z: number): boolean;
}
