import * as THREE from 'three';
import { FX } from '../../../world/builders';
import type { Kit } from '../../kit';
import { towerCrane } from '../../parts/crane';
import { hoarding } from '../../parts/hoarding';
import type { Resort } from '../../resort';
import { ballparkBanner } from './signs';

/**
 * The old Tropicana lot, imploded in October 2024: the Athletics' 33,000-seat
 * ballpark rising in its place, the bowl's concrete rakers and the first
 * steel of the five-layered, tortoise-shell roof going up between tower
 * cranes, a hoarding all along the Strip. Frame faces the Strip; +x north.
 */
function buildBallpark(k: Kit) {
  const fr = k.frame(1720, 1880, 270);
  k.reserve(fr, 0, 0, 150, 140);
  const cx = 0;
  const cz = 0;
  k.box(fr, cx, -2.2, cz, 290, 2, 260, '#9a8a6e', { rough: 1 });
  // The seating bowl: concrete rakers in a horseshoe round home plate.
  for (let i = 0; i <= 18; i++) {
    const a = -Math.PI * 0.85 + (i / 18) * Math.PI * 1.7;
    const r0 = 52;
    const r1 = 92;
    const p0 = new THREE.Vector3(cx + Math.cos(a) * r0, 2, cz - 20 + Math.sin(a) * r0);
    const p1 = new THREE.Vector3(cx + Math.cos(a) * r1, 30, cz - 20 + Math.sin(a) * r1);
    k.tube(fr, p0, p1, 1.4, '#b8b4ac', 0);
    k.box(fr, p1.x, 0, p1.z, 3, 30, 3, '#b8b4ac', { rough: 0.9 });
    if (i % 3 === 0) k.box(fr, p1.x, 30, p1.z, 3.4, 18, 3.4, '#6a6e72', { rough: 0.6, fx: FX.METAL });
  }
  // First arc of roof steel spanning from the third-base side.
  for (let i = 0; i < 12; i++) {
    const t0 = i / 12;
    const t1 = (i + 1) / 12;
    const arc = (t: number) => new THREE.Vector3(-80 + t * 160, 48 + Math.sin(Math.PI * t) * 26, cz - 20);
    k.tube(fr, arc(t0), arc(t1), 0.9, '#7a7e84', 0);
  }
  k.box(fr, cx, -1.5, cz + 25, 70, 0.3, 50, '#5a7a3a', { rough: 1 });
  towerCrane(k, fr, -70, 30, 95, 65, 0.6);
  towerCrane(k, fr, 70, -10, 110, 70, 3.6);
  towerCrane(k, fr, 0, -95, 90, 55, 1.6);
  hoarding(k, fr, -150, 150, 135, 'ballparkBanner', 3);
  k.walk(fr, [[-150, 139], [0, 139], [150, 139]]);
}

export const ballpark: Resort = {
  id: 'ballpark',
  name: 'Athletics ballpark (Tropicana site)',
  signs: [ballparkBanner],
  build: buildBallpark,
};
