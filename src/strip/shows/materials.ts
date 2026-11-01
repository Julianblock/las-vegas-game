import * as THREE from 'three';
import { G } from '../../render/globals';
import { landmarkFragment, landmarkVertex } from '../../render/shaders/landmarkShader';

/** Landmark material for geometry that moves with its object's matrix (wheels, rides, trains). */
export function movingMaterial() {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: landmarkVertex,
    fragmentShader: landmarkFragment,
    uniforms: { ...G },
    defines: { MOVING: '' },
    side: THREE.DoubleSide,
  });
}

/** Landmark material for instanced moving parts (each instance has its own matrix). */
export function instancedMaterial() {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: landmarkVertex,
    fragmentShader: landmarkFragment,
    uniforms: { ...G },
    side: THREE.DoubleSide,
  });
}
