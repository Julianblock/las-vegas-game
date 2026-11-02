import * as THREE from 'three';
import type { Show } from '../../strip/shows/show';
import type { Heightfield } from '../../world/heightfield';
import { SANS } from '../../world/signKit';
import { CES } from '../calendar';
import { today } from '../today';

/** Hung on the hall’s Paradise Road face for the week, setup to teardown. */
const AT = { x: 3203, z: -1700, w: 60, h: 14, lift: 9 };

function paint() {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 240;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, c.width, 0);
  grad.addColorStop(0, '#1a1aa8');
  grad.addColorStop(1, '#00b8f0');
  g.fillStyle = grad;
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = '#ffffff';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `900 140px ${SANS}`;
  g.fillText('CES 2027', c.width * 0.31, c.height * 0.52, c.width * 0.56);
  g.font = `700 34px ${SANS}`;
  g.fillText('THE MOST POWERFUL', c.width * 0.8, c.height * 0.38, c.width * 0.34);
  g.fillText('TECH EVENT', c.width * 0.8, c.height * 0.62, c.width * 0.34);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** The giant CES banner across the convention centre’s west face. */
export class CesBanner implements Show {
  readonly object: THREE.Mesh;

  constructor(hf: Heightfield) {
    const mat = new THREE.MeshBasicMaterial({ map: paint(), side: THREE.DoubleSide });
    this.object = new THREE.Mesh(new THREE.PlaneGeometry(AT.w, AT.h), mat);
    this.object.position.set(AT.x, hf.height(AT.x, AT.z) + AT.lift + AT.h / 2, AT.z);
    this.object.rotation.y = -Math.PI / 2;
  }

  update() {
    this.object.visible = today.month === CES.month && today.day >= CES.first - 2 && today.day <= CES.last + 1;
  }
}
