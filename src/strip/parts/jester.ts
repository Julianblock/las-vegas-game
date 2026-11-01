import * as THREE from 'three';
import { FX, type Frame } from '../../world/builders';
import type { Kit } from '../kit';

/** A gilded Mardi Gras jester at local (x, y, z): body, ruff, three-horned cap with bells. */
export function jester(k: Kit, fr: Frame, x: number, y: number, z: number, h = 4, yaw = 0) {
  const gold = { rough: 0.3, fx: FX.METAL, glow: 0.3 };
  k.geo(fr, new THREE.CylinderGeometry(h * 0.1, h * 0.16, h * 0.55, 8).translate(0, h * 0.27, 0), x, y, z, '#d8a830', gold, yaw);
  k.cyl(fr, x, y + h * 0.55, z, h * 0.17, h * 0.17, h * 0.05, '#f2e6c8', { rough: 0.6 }, 10);
  k.geo(fr, new THREE.SphereGeometry(h * 0.1, 8, 6), x, y + h * 0.68, z, '#f2e6c8', { rough: 0.5 });
  for (let i = 0; i < 3; i++) {
    const a = yaw + (i - 1) * 0.9;
    const tip = new THREE.Vector3(x + Math.cos(a) * h * 0.22, y + h * 0.95, z + Math.sin(a) * h * 0.05);
    k.tube(fr, new THREE.Vector3(x, y + h * 0.75, z), tip, h * 0.035, i === 1 ? '#7a1a8a' : '#1a7a3a', 0.2);
    k.geo(fr, new THREE.SphereGeometry(h * 0.035, 6, 4), tip.x, tip.y, tip.z, '#ffd84a', gold);
  }
}
