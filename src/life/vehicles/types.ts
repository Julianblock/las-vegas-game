import type * as THREE from 'three';
import { carGeometry } from './car';
import { deuceGeometry } from './deuce';
import { limoGeometry } from './limo';
import { DEUCE, DEUCE_TOP, LIMO, LIMO_TRIM, PAINT, RV, TAXI, TAXI_TOP, TRAILER } from './paint';
import { pickupGeometry } from './pickup';
import { rvGeometry } from './rv';
import { semiGeometry } from './semi';
import { taxiGeometry } from './taxi';

/** One kind of traffic: its length and lamp placement, shape and liveries. */
export interface VehicleType {
  id: string;
  len: number;
  lightY: number;
  lightZ: number;
  geo: () => THREE.BufferGeometry;
  paint: string[];
  /** Colour of the accent part (taxi topper, limo trim, bus roof). */
  accent?: string[];
  /** Holds the slow lane. */
  slow?: boolean;
}

export const VEHICLES: VehicleType[] = [
  { id: 'car', len: 4.7, lightY: 0.72, lightZ: 0.66, geo: carGeometry, paint: PAINT },
  { id: 'pickup', len: 5.8, lightY: 0.95, lightZ: 0.74, geo: pickupGeometry, paint: PAINT },
  { id: 'semi', len: 21.5, lightY: 1.1, lightZ: 1.0, geo: semiGeometry, paint: TRAILER, slow: true },
  { id: 'rv', len: 10.5, lightY: 0.9, lightZ: 1.0, geo: rvGeometry, paint: RV, slow: true },
  { id: 'taxi', len: 4.7, lightY: 0.72, lightZ: 0.66, geo: taxiGeometry, paint: TAXI, accent: TAXI_TOP },
  { id: 'limo', len: 9.0, lightY: 0.72, lightZ: 0.7, geo: limoGeometry, paint: LIMO, accent: LIMO_TRIM, slow: true },
  { id: 'deuce', len: 13.4, lightY: 0.9, lightZ: 1.0, geo: deuceGeometry, paint: DEUCE, accent: DEUCE_TOP, slow: true },
];

export const V = { CAR: 0, PICKUP: 1, SEMI: 2, RV: 3, TAXI: 4, LIMO: 5, DEUCE: 6 } as const;
