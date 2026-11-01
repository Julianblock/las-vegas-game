import * as THREE from 'three';
import { SolidBuilder } from '../../world/builders';

const SKIN = ['#e9c4a0', '#c99a72', '#8d5e3c', '#5a3a26'];

/** A standing reveller seen from a distance: dark legs, a coloured top and a head. About 1.75 m. */
export function revellerGeometry(top: string, skin: number) {
  const s = new SolidBuilder();
  const I = new THREE.Matrix4();
  s.add(new THREE.BoxGeometry(0.36, 0.85, 0.24).translate(0, 0.425, 0), I, '#24262c', { rough: 0.9 });
  s.add(new THREE.BoxGeometry(0.46, 0.62, 0.28).translate(0, 1.16, 0), I, top, { rough: 0.85 });
  s.add(new THREE.BoxGeometry(0.22, 0.25, 0.22).translate(0, 1.6, 0), I, SKIN[skin % SKIN.length], { rough: 0.7 });
  return s.build();
}
