import { lightingCommon } from '../../render/shaders/lighting';

/**
 * Bellagio fountain jets: each instance is a pair of crossed ribbons whose
 * height, sway and spread follow a choreography evaluated from the show
 * clock, so a thousand nozzles dance with no per-frame CPU work.
 */
export const fountainVertex = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
uniform vec3 uCamPos;
uniform float uShowT;
uniform float uShowLen;
in vec4 aJet; // x, ground y, z, kind
in float aU;  // 0..1 along its line
out vec2 vUv;
out vec3 vWorld;
out float vLive;

float pulse(float t, float period, float duty) { return smoothstep(0.0, 0.12, fract(t / period)) * (1.0 - smoothstep(duty, duty + 0.15, fract(t / period))); }

void main() {
  float t = uShowT;
  float on = step(0.0, t) * smoothstep(0.0, 2.0, t) * (1.0 - smoothstep(uShowLen - 3.0, uShowLen, t));
  float kind = aJet.w;
  float hMax = kind < 0.5 ? 24.0 : kind < 1.5 ? 14.0 : kind < 2.5 ? 58.0 : 140.0;
  float seg = mod(floor(t / 7.0), 6.0);
  float h = 0.0;
  if (seg < 0.5) h = max(0.0, sin(t * 3.0 - aU * 14.0));                       // running wave
  else if (seg < 1.5) h = 0.65 + 0.35 * sin(t * 4.0 + kind);                   // breathing wall
  else if (seg < 2.5) h = step(0.5, fract(t / 3.0)) == step(0.5, aU) ? 1.0 : 0.08; // call and answer
  else if (seg < 3.5) h = pulse(t + aU * 0.4, 0.75, 0.35);                      // beat bursts
  else if (seg < 4.5) h = max(0.0, sin(t * 2.5 - abs(aU - 0.5) * 16.0));        // centre ripple
  else h = 1.0;                                                                 // finale
  // Extreme shooters only fire on the bursts and the finale.
  if (kind > 2.5) h *= (seg > 2.5 && seg < 3.5) || seg > 4.5 ? pulse(t, 3.5, 0.3) : 0.0;
  h *= on;
  float H = hMax * h;
  vLive = h;

  float y = position.y;
  float w = mix(1.1, 3.6 + hMax * 0.045, y * y) * (0.4 + 0.6 * h);
  vec3 p = vec3(position.x * w, y * H, position.z * w);
  // Oarsmen swing along their line; the plume falls back as it tops out.
  if (kind < 0.5) p.z += sin(t * 2.2 + aU * 7.0) * 0.55 * y * H;
  p.xz += vec2(0.6, 0.2) * y * y * H * 0.06;
  vec3 world = vec3(aJet.x, aJet.y, aJet.z) + p;
  vec2 dc = world.xz - uCamPos.xz;
  world.y -= dot(dc, dc) / (2.0 * 7310000.0);
  vWorld = world;
  vUv = vec2(position.x + position.z + 0.5, y);
  gl_Position = H < 0.05 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * viewMatrix * vec4(world, 1.0);
  #include <logdepthbuf_vertex>
}
`;

export const fountainFragment = /* glsl */ `
${lightingCommon}
#include <logdepthbuf_pars_fragment>
uniform float uShowT;
in vec2 vUv;
in vec3 vWorld;
in float vLive;
out vec4 outColor;

void main() {
  #include <logdepthbuf_fragment>
  float x = vUv.x * 2.0 - 1.0;
  float core = exp(-x * x * 5.0);
  float top = 1.0 - smoothstep(0.62, 1.0, vUv.y);
  float streak = 0.65 + 0.35 * sin(vUv.y * 46.0 - uShowT * 24.0 + x * 9.0);
  float a = core * top * streak * vLive;
  // Sunlit white spray by day; white floods from the lake floor after dark.
  vec3 day = vec3(0.92, 0.95, 1.0) * 0.55;
  vec3 night = vec3(0.85, 0.92, 1.0) * (1.6 - vUv.y);
  vec3 c = mix(day, night, uNight) * a * uInvExposure;
  c *= segmentTransmittance(vWorld);
  outColor = vec4(c, 1.0);
}
`;
