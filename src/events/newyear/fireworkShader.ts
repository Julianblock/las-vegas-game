import { lightingCommon } from '../../render/shaders/lighting';

/**
 * Firework particles, animated entirely on the GPU. Every particle belongs to
 * a shell fired from a rooftop on a repeating cycle: a rocket climbs for
 * RISE seconds, then the shell's stars fly out, slow in the air, droop under
 * gravity and fade.
 */
export const fireworkVertex = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
uniform vec3 uCamPos;
uniform float uT;
uniform float uOn;
uniform float uPixelScale;
in vec4 aShell;  // phase (s), period (s), burst height (m), hue 0..1
in vec4 aDir;    // unit direction, speed (m/s); speed 0 marks the rocket itself
out vec3 vColor;
out vec3 vWorld;

const float RISE = 1.8;
const float DRAG = 1.4;
const float LIFE = 2.8;

vec3 hue(float h) {
  return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
}

void main() {
  float t = mod(uT + aShell.x, aShell.y);
  vec3 apex = position + vec3(sin(aShell.w * 40.0) * 25.0, aShell.z, cos(aShell.w * 40.0) * 25.0);
  vec3 world;
  vec3 col;
  float size;
  float on = uOn;
  if (aDir.w == 0.0) {
    float u = clamp(t / RISE, 0.0, 1.0);
    world = mix(position, apex, 1.0 - (1.0 - u) * (1.0 - u));
    col = vec3(1.0, 0.75, 0.45) * 1.5;
    size = 1.2;
    on *= step(t, RISE);
  } else {
    float tb = t - RISE;
    on *= step(0.0, tb);
    tb = max(tb, 0.0);
    world = apex + aDir.xyz * aDir.w * (1.0 - exp(-DRAG * tb)) / DRAG;
    world.y -= 1.6 * tb * tb;
    float fade = clamp(1.0 - tb / LIFE, 0.0, 1.0);
    float sparkle = 0.75 + 0.25 * sin(uT * 37.0 + aDir.x * 91.0 + aDir.z * 53.0);
    col = mix(hue(aShell.w), vec3(1.0), 0.12) * fade * fade * sparkle * 4.0;
    size = 2.2 * (0.6 + 0.4 * fade);
    on *= step(0.001, fade);
  }
  vec2 dc = world.xz - uCamPos.xz;
  world.y -= dot(dc, dc) / (2.0 * 7310000.0);
  vWorld = world;
  vec4 mv = viewMatrix * vec4(world, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = size * uPixelScale / max(-mv.z, 1.0);
  vColor = col * on * clamp(px * px * 0.5 + 0.15, 0.0, 1.0);
  gl_PointSize = on > 0.0 ? clamp(px * 3.0, 2.0, 40.0) : 0.0;
  #include <logdepthbuf_vertex>
}
`;

export const fireworkFragment = /* glsl */ `
${lightingCommon}
#include <logdepthbuf_pars_fragment>
in vec3 vColor;
in vec3 vWorld;
out vec4 outColor;

void main() {
  #include <logdepthbuf_fragment>
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float glow = exp(-r2 * 9.0) * 2.0 + exp(-r2 * 3.0) * 0.2;
  vec3 c = vColor * glow * uInvExposure;
  c *= segmentTransmittance(vWorld);
  outColor = vec4(c, 1.0);
}
`;
