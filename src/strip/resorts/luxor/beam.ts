import * as THREE from 'three';
import type { Heightfield } from '../../../world/heightfield';
import type { Show } from '../../shows/show';

export const APEX = { x: 1260, z: 2278, h: 111 };

const vertex = /* glsl */ `
  out float vUp;
  out vec3 vNormal;
  out vec3 vView;
  void main() {
    vUp = uv.y;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(mat3(modelMatrix) * normal);
    vView = normalize(cameraPosition - wp.xyz);
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const fragment = /* glsl */ `
  uniform float uOn;
  in float vUp;
  in vec3 vNormal;
  in vec3 vView;
  out vec4 outColor;
  void main() {
    // Brightest in the core, seen edge-on through the most lit air.
    float core = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 0.6);
    float fade = pow(1.0 - vUp, 2.2);
    float a = uOn * fade * (0.25 + 0.75 * core) * 0.55;
    outColor = vec4(vec3(0.85, 0.9, 1.0) * a, a);
  }
`;

/**
 * The Luxor Sky Beam: 39 xenon lamps under the pyramid's capstone throwing
 * a single shaft straight up, the brightest beam on Earth, visible to
 * aircraft over Los Angeles. On from dusk to midnight.
 */
export class SkyBeam implements Show {
  readonly object: THREE.Mesh;
  private mat: THREE.ShaderMaterial;

  constructor(hf: Heightfield) {
    const height = 6000;
    const geo = new THREE.CylinderGeometry(22, 2.5, height, 24, 1, true).translate(0, height / 2, 0);
    this.mat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: { uOn: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    this.object = new THREE.Mesh(geo, this.mat);
    this.object.position.set(APEX.x, hf.height(APEX.x, APEX.z) + APEX.h, APEX.z);
    this.object.frustumCulled = false;
    this.object.renderOrder = 10;
  }

  update(_dt: number, _clock: number, night: number) {
    const target = night > 0.5 ? 1 : 0;
    const u = this.mat.uniforms.uOn;
    u.value += (target - u.value) * 0.02;
    this.object.visible = u.value > 0.01;
  }
}
