import { lightingCommon } from '../../../render/shaders/lighting';

/**
 * The Exosphere: 1.2 million LED pucks over the Sphere's skin, here drawn
 * procedurally. Programs (uMode): 0 the eyeball, 1 jack-o'-lantern,
 * 2 the Earth, 3 a basketball, 4 the full moon, 5 a racing helmet,
 * 6 a glitter mirror ball, 7 the flag, 8 fireworks, 9 a Christmas bauble,
 * 10 a heart, 11 a shamrock, 12 a snow globe, 13 a smiley. uFace points the content
 * toward the Strip; uLook steers the eye.
 */
export const exosphereVertex = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_vertex>
uniform vec3 uCamPos;
out vec3 vN;
out vec3 vWorld;
void main() {
  vN = normalize(position);
  vec3 world = (modelMatrix * vec4(position, 1.0)).xyz;
  vec2 dc = world.xz - uCamPos.xz;
  world.y -= dot(dc, dc) / (2.0 * 7310000.0);
  vWorld = world;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
  #include <logdepthbuf_vertex>
}
`;

export const exosphereFragment = /* glsl */ `
${lightingCommon}
#include <logdepthbuf_pars_fragment>
uniform float uMode;
uniform float uFade;
uniform vec3 uFace;
uniform vec3 uLook;
in vec3 vN;
in vec3 vWorld;
out vec4 outColor;

float hash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float vnoise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
                mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  return n;
}
float tri(vec2 p, vec2 c, float s, float flip) {
  vec2 q = (p - c) / s;
  q.y *= flip;
  return step(-0.5, q.y) * step(abs(q.x) * 1.7, 0.5 - q.y);
}

vec3 eye(vec3 n) {
  float d = acos(clamp(dot(n, normalize(uLook)), -1.0, 1.0));
  vec3 sclera = vec3(0.95, 0.93, 0.9) - vec3(0.0, 0.25, 0.25) * smoothstep(0.9, 1.6, d) * (0.5 + 0.5 * sin(atan(n.z, n.x) * 30.0));
  float a = atan(n.y, n.x) * 40.0;
  vec3 iris = mix(vec3(0.08, 0.35, 0.55), vec3(0.35, 0.65, 0.4), 0.5 + 0.5 * sin(a + d * 30.0));
  vec3 c = mix(iris, sclera, smoothstep(0.42, 0.46, d));
  c = mix(vec3(0.01), c, smoothstep(0.17, 0.2, d));
  c += vec3(1.0) * smoothstep(0.06, 0.0, length(n - normalize(uLook + vec3(0.12, 0.15, 0.0))));
  return c;
}

vec3 pumpkin(vec3 n) {
  float lon = atan(n.z, n.x);
  vec3 skin = vec3(0.95, 0.42, 0.04) * (0.7 + 0.3 * pow(abs(cos(lon * 6.0)), 0.5));
  skin = mix(skin, vec3(0.2, 0.45, 0.1), smoothstep(0.88, 0.95, n.y));
  vec3 f = normalize(uFace);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  vec2 p = vec2(dot(n, r), dot(n, u));
  float front = step(0.0, dot(n, f));
  float carve = tri(p, vec2(-0.32, 0.25), 0.3, -1.0) + tri(p, vec2(0.32, 0.25), 0.3, -1.0) + tri(p, vec2(0.0, 0.02), 0.16, 1.0);
  float top = -0.14 + 0.38 * p.x * p.x;
  float bot = -0.44 + 0.5 * p.x * p.x;
  float mouth = step(abs(p.x), 0.56) * step(bot, p.y) * step(p.y, top);
  float upper = step(fract(p.x * 4.0 + 0.25), 0.32) * step(top - 0.09, p.y);
  float lower = step(fract(p.x * 4.0 + 0.75), 0.32) * step(p.y, bot + 0.09);
  mouth *= 1.0 - max(upper, lower);
  carve = clamp(carve + mouth, 0.0, 1.0) * front;
  float flick = 0.85 + 0.15 * sin(uTime * 13.0) * sin(uTime * 7.3);
  return mix(skin, vec3(1.0, 0.85, 0.3) * 1.6 * flick, carve);
}

vec3 earth(vec3 n) {
  float s = uTime * 0.05;
  vec3 q = vec3(n.x * cos(s) - n.z * sin(s), n.y, n.x * sin(s) + n.z * cos(s));
  float land = vnoise(q * 2.2) * 0.6 + vnoise(q * 5.0) * 0.3 + vnoise(q * 11.0) * 0.1;
  vec3 c = mix(vec3(0.03, 0.15, 0.45), mix(vec3(0.2, 0.45, 0.15), vec3(0.6, 0.5, 0.3), vnoise(q * 7.0)), smoothstep(0.52, 0.56, land));
  c = mix(c, vec3(0.95), smoothstep(0.78, 0.86, abs(n.y)));
  c = mix(c, vec3(1.0), smoothstep(0.62, 0.75, vnoise(q * 4.0 + vec3(uTime * 0.03))) * 0.6);
  return c;
}

vec3 ball(vec3 n) {
  float s = uTime * 0.3;
  vec3 q = vec3(n.x * cos(s) - n.z * sin(s), n.y, n.x * sin(s) + n.z * cos(s));
  vec3 c = vec3(0.85, 0.38, 0.1) * (0.85 + 0.15 * vnoise(q * 60.0));
  float seam = min(min(abs(q.x), abs(q.y)), abs(abs(q.z) - 0.6 - 0.3 * q.y * q.y));
  return mix(vec3(0.05), c, smoothstep(0.012, 0.025, seam));
}

vec3 helmet(vec3 n) {
  vec3 f = normalize(uFace);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  vec2 p = vec2(dot(n, r), dot(n, u));
  float front = dot(n, f);
  float sweep = -0.15 + 0.25 * sin(atan(dot(n, r), front) * 1.5);
  vec3 c = mix(vec3(0.92), vec3(0.85, 0.03, 0.05), step(p.y, sweep));
  float band = step(abs(p.y - 0.42), 0.06);
  float check = mod(floor(atan(n.z, n.x) * 30.0) + floor(p.y * 50.0), 2.0);
  c = mix(c, vec3(check), band);
  float visor = step(0.2, front) * step(abs(p.y - 0.08), 0.14) * step(abs(p.x), 0.62);
  vec3 glass = vec3(0.02, 0.03, 0.06) + vec3(0.5, 0.6, 0.8) * smoothstep(0.04, 0.0, abs(p.x + p.y * 0.8 - 0.1 - 0.15 * sin(uTime * 0.5)));
  return mix(c, glass, visor);
}

vec3 mirrorball(vec3 n) {
  vec2 cell = floor(vec2(atan(n.z, n.x) * 9.0, asin(clamp(n.y, -1.0, 1.0)) * 18.0));
  float flash = pow(hash3(vec3(cell, floor(uTime * 5.0))), 24.0);
  vec3 base = mix(vec3(0.35, 0.32, 0.28), vec3(0.95, 0.85, 0.55), 0.5 + 0.5 * n.y);
  return base * (0.5 + 0.5 * hash3(vec3(cell, 1.0))) + vec3(1.0, 0.95, 0.85) * flash * 3.0;
}

vec3 flag(vec3 n) {
  vec3 f = normalize(uFace);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  vec2 p = vec2(dot(n, r), dot(n, u));
  float wave = 0.05 * sin(p.x * 5.0 - uTime * 2.2);
  float y = p.y + wave;
  float stripe = mod(floor((y + 0.7) / 1.4 * 13.0), 2.0);
  vec3 c = mix(vec3(0.78, 0.06, 0.12), vec3(0.96), stripe);
  float canton = step(p.x, -0.08) * step(0.0, y);
  vec2 sp = vec2(p.x * 9.0, y * 9.0);
  float star = smoothstep(0.17, 0.09, length(fract(sp + vec2(0.5 * mod(floor(sp.y), 2.0), 0.0)) - 0.5));
  c = mix(c, mix(vec3(0.05, 0.12, 0.42), vec3(1.0), star), canton);
  return c * (0.82 + 0.18 * cos(p.x * 5.0 - uTime * 2.2));
}

vec3 bursts(vec3 n) {
  vec3 c = vec3(0.01, 0.01, 0.04);
  vec3 f = normalize(uFace);
  for (int i = 0; i < 6; i++) {
    float t = uTime * 0.45 + float(i) * 0.37;
    float k = floor(t), ph = fract(t);
    vec3 at = normalize(f * 1.2 + vec3(hash3(vec3(k, float(i), 1.0)) - 0.5, hash3(vec3(k, float(i), 2.0)) - 0.3, hash3(vec3(k, float(i), 3.0)) - 0.5) * 1.6);
    float d = acos(clamp(dot(n, at), -1.0, 1.0));
    float shell = smoothstep(0.035, 0.0, abs(d - ph * 0.55)) * (1.0 - ph);
    float sparks = step(0.8, hash3(floor(n * 90.0) + k)) * step(d, ph * 0.55) * (1.0 - ph);
    vec3 hue = 0.55 + 0.45 * cos(6.2831 * (hash3(vec3(k, float(i), 4.0)) + vec3(0.0, 0.33, 0.67)));
    c += hue * (shell * 2.2 + sparks);
  }
  return c;
}

vec3 front(vec3 n) {
  vec3 f = normalize(uFace);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  return vec3(dot(n, r), dot(n, cross(f, r)), dot(n, f));
}

vec3 ornament(vec3 n) {
  vec3 p = front(n);
  vec3 c = vec3(0.75, 0.04, 0.08) * (0.55 + 0.45 * smoothstep(-0.2, 1.0, p.z));
  float band = step(abs(abs(n.y) - 0.35), 0.05);
  float dots = step(0.82, hash3(floor(vec3(atan(n.z, n.x) * 14.0, n.y * 20.0, 0.0)))) * step(abs(n.y), 0.25);
  c = mix(c, vec3(1.0, 0.8, 0.3), max(band, dots));
  c += vec3(1.0) * smoothstep(0.12, 0.0, length(p.xy - vec2(-0.3, 0.35))) * step(0.0, p.z);
  return c;
}

vec3 heart(vec3 n) {
  vec3 p = front(n);
  float beat = 1.0 + 0.06 * pow(abs(sin(uTime * 2.6)), 8.0);
  vec2 q = (p.xy * 2.2 - vec2(0.0, 0.15)) / beat;
  float h = pow(q.x * q.x + q.y * q.y - 1.0, 3.0) - q.x * q.x * q.y * q.y * q.y;
  float inside = step(h, 0.0) * step(0.0, p.z);
  return mix(vec3(1.0, 0.55, 0.7), vec3(0.85, 0.02, 0.12), inside);
}

vec3 clover(vec3 n) {
  vec3 p = front(n);
  vec3 c = vec3(0.04, 0.35, 0.12);
  float leaf = 0.0;
  for (int i = 0; i < 3; i++) {
    float a = 1.5708 + float(i) * 2.0944;
    leaf = max(leaf, step(length(p.xy - vec2(cos(a), sin(a)) * 0.22), 0.2));
  }
  float stem = step(abs(p.x - (p.y + 0.1) * -0.3), 0.03) * step(p.y, -0.1) * step(-0.6, p.y);
  return mix(c, vec3(0.3, 0.95, 0.35), max(leaf, stem) * step(0.0, p.z));
}

vec3 snowglobe(vec3 n) {
  vec3 c = mix(vec3(0.05, 0.12, 0.35), vec3(0.4, 0.6, 0.9), 0.5 + 0.5 * n.y);
  c = mix(c, vec3(0.95), step(n.y, -0.45));
  vec2 g = vec2(atan(n.z, n.x) * 40.0, n.y * 40.0 + uTime * 1.5);
  float flake = step(0.93, hash3(vec3(floor(g), 3.0))) * smoothstep(0.35, 0.1, length(fract(g) - 0.5));
  return c + vec3(flake);
}

vec3 smiley(vec3 n) {
  vec3 p = front(n);
  vec3 c = vec3(1.0, 0.82, 0.1);
  float eyes = step(length(vec2(abs(p.x) - 0.22, p.y - 0.18) * vec2(1.0, 0.6)), 0.07);
  float r = length(p.xy - vec2(0.0, 0.05));
  float mouth = step(abs(r - 0.38), 0.035) * step(p.y, -0.05);
  float wink = step(0.92, fract(uTime * 0.25)) * step(p.x, 0.0);
  eyes *= 1.0 - wink * (1.0 - step(abs(p.y - 0.18), 0.015));
  return mix(c, vec3(0.08), max(eyes, mouth) * step(0.0, p.z));
}

vec3 moon(vec3 n) {
  float m = vnoise(n * 4.0) * 0.6 + vnoise(n * 13.0) * 0.4;
  return vec3(0.82, 0.82, 0.78) * (0.65 + 0.35 * smoothstep(0.35, 0.7, m));
}

vec3 program(vec3 n) {
  int m = int(uMode + 0.5);
  if (m == 0) return eye(n);
  if (m == 1) return pumpkin(n);
  if (m == 2) return earth(n);
  if (m == 3) return ball(n);
  if (m == 4) return moon(n);
  if (m == 5) return helmet(n);
  if (m == 6) return mirrorball(n);
  if (m == 7) return flag(n);
  if (m == 8) return bursts(n);
  if (m == 9) return ornament(n);
  if (m == 10) return heart(n);
  if (m == 11) return clover(n);
  if (m == 12) return snowglobe(n);
  return smiley(n);
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 n = normalize(vN);
  vec3 c = program(n);
  // LED pucks: a fine grid of points with dark gaps.
  float lon = atan(n.z, n.x) * 420.0;
  float lat = asin(clamp(n.y, -1.0, 1.0)) * 420.0;
  float puck = smoothstep(0.5, 0.2, length(fract(vec2(lon, lat)) - 0.5));
  c *= mix(0.55, 1.0, puck) * uFade;
  vec3 col = c * mix(0.9, 1.5, uNight) * uInvExposure;
  col *= segmentTransmittance(vWorld);
  outColor = vec4(col, 1.0);
}
`;
