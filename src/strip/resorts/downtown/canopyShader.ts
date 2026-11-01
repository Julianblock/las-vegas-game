import { lightingCommon } from '../../../render/shaders/lighting';

/**
 * Viva Vision, the LED canopy over Fremont Street: by day a grey space frame,
 * after dark a moving picture across the whole vault. Programs rotate every
 * twenty seconds: colour waves, a starfield, a waving flag, and bursts.
 * aUv.x runs across the vault (-1..1), aUv.y along it in metres.
 */
export const canopyVertex = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
uniform vec3 uCamPos;
in vec2 aUv;
out vec2 vUv;
out vec3 vWorld;
out vec3 vNormal;
void main() {
  vUv = aUv;
  vec3 world = position;
  vNormal = normal;
  vec2 dc = world.xz - uCamPos.xz;
  world.y -= dot(dc, dc) / (2.0 * 7310000.0);
  vWorld = world;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  #include <logdepthbuf_vertex>
}
`;

export const canopyFragment = /* glsl */ `
${lightingCommon}
#include <logdepthbuf_pars_fragment>
uniform float uLen;
in vec2 vUv;
in vec3 vWorld;
in vec3 vNormal;
out vec4 outColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec3 hue(float h) { return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }

vec3 waves(vec2 p) {
  return hue(fract(p.y / 160.0 - uTime * 0.08 + 0.15 * sin(p.x * 3.0 + uTime))) * 0.9;
}
vec3 stars(vec2 p) {
  vec2 c = floor(vec2(p.x * 20.0, p.y * 0.8 + uTime * 6.0));
  float s = step(0.985, hash(c)) * (0.6 + 0.4 * sin(uTime * 5.0 + hash(c) * 30.0));
  return vec3(0.02, 0.01, 0.08) + vec3(s);
}
vec3 flag(vec2 p) {
  float w = p.y / 40.0 + sin(p.y / 25.0 - uTime * 2.0) * 0.15;
  float union_ = step(p.x, -0.2) * step(fract(p.y / uLen * 3.0), 0.33);
  vec3 stripes = mix(vec3(0.75, 0.05, 0.1), vec3(0.95), step(0.5, fract(p.x * 3.25 + w * 0.1)));
  vec3 blue = vec3(0.05, 0.1, 0.45) + step(0.8, hash(floor(vec2(p.x * 12.0, p.y * 0.5)))) * 0.9;
  return mix(stripes, blue, union_) * (0.8 + 0.2 * sin(w * 6.28));
}
vec3 bursts(vec2 p) {
  vec3 c = vec3(0.0);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float t = fract(uTime * 0.35 + fi * 0.21);
    vec2 o = vec2(sin(fi * 7.1) * 0.5, uLen * fract(fi * 0.37 + floor(uTime * 0.35 + fi * 0.21) * 0.61));
    float r = length(vec2((p.x - o.x) * 25.0, p.y - o.y));
    c += hue(fract(fi * 0.23)) * smoothstep(2.5, 0.0, abs(r - t * 60.0)) * (1.0 - t);
  }
  return c;
}

void main() {
  #include <logdepthbuf_fragment>
  vec2 p = vUv;
  float prog = mod(floor(uTime / 20.0), 4.0);
  vec3 led = prog < 0.5 ? waves(p) : prog < 1.5 ? stars(p) : prog < 2.5 ? flag(p) : bursts(p);
  // The steel space frame shows by day; LED pixels show through it at night.
  float grid = max(step(0.92, fract(p.y / 3.0)), step(0.9, fract((p.x + 1.0) * 6.0)));
  vec3 steel = vec3(0.42, 0.44, 0.47) * (0.6 + 0.4 * max(dot(normalize(vNormal), vec3(0.3, 0.9, 0.2)), 0.0));
  vec3 day = mix(steel * 0.7, steel, grid);
  // The LEDs face down at the street; from above the vault is a plain steel roof.
  float under = step(uCamPos.y, vWorld.y);
  vec3 c = mix(day * (1.0 - uNight * 0.85), led * 1.6, uNight * (1.0 - grid * 0.5) * under);
  c *= uInvExposure;
  c *= segmentTransmittance(vWorld);
  outColor = vec4(c, 1.0);
}
`;
