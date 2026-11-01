import * as THREE from 'three';
import { G } from '../render/globals';
import { landmarkFragment, landmarkVertex } from '../render/shaders/landmarkShader';
import type { ShadowMap } from '../render/shadows';
import type { Heightfield } from '../world/heightfield';
import type { OsmData } from '../world/meta';
import type { Lot } from '../world/props';
import { buildSignAtlas } from '../world/signAtlas';
import { Kit } from './kit';
import { lotsFromOsm } from './lots';
import { Masses } from './masses';
import { RESORTS } from './resorts';
import { BellagioFountains } from './shows/fountains';
import type { Show } from './shows/show';

/**
 * The Las Vegas resort corridor: every OSM building along the Strip and
 * Flamingo Road extruded to its real height, then each resort module's
 * hand-built signs, crowns, porte-cochères, palms and attractions on top.
 */
export class Strip {
  readonly group = new THREE.Group();
  readonly kit: Kit;
  readonly masses: Masses;
  readonly lights: number[];
  readonly glows: number[];
  readonly lots: Lot[];
  /** Timed spectacles: fountains, volcano, beams and screens. */
  readonly shows: Show[] = [];
  private solidGeo: THREE.BufferGeometry;
  private shadowMat: THREE.ShaderMaterial;

  constructor(osm: OsmData, hf: Heightfield, water: (x: number, z: number) => number = () => -Infinity) {
    const atlas = buildSignAtlas();
    this.kit = new Kit(hf, atlas.rects);
    for (const r of RESORTS) r.style?.();
    for (const r of RESORTS) {
      this.kit.seed = 100 + RESORTS.indexOf(r);
      r.build?.(this.kit);
    }
    this.masses = new Masses(osm.masses, hf, (m, x, z) => RESORTS.some((r) => r.replaces?.(m, x, z)));
    this.group.add(this.masses.group);

    const solidMat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: landmarkVertex,
      fragmentShader: landmarkFragment,
      uniforms: { ...G },
      side: THREE.DoubleSide,
    });
    const signMat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: landmarkVertex,
      fragmentShader: landmarkFragment,
      uniforms: { ...G, uMap: { value: atlas.texture } },
      defines: { USE_MAP: '' },
      side: THREE.DoubleSide,
    });
    this.shadowMat = solidMat.clone();
    this.shadowMat.uniforms = solidMat.uniforms;
    this.shadowMat.defines = { SHADOW_PASS: '' };
    this.solidGeo = this.kit.s.build();
    const solids = new THREE.Mesh(this.solidGeo, solidMat);
    const signs = new THREE.Mesh(this.kit.sg.build(), signMat);
    solids.name = signs.name = 'strip';
    this.group.add(solids, signs);

    this.lights = [...this.kit.lights, ...this.masses.lights];
    this.glows = [...this.kit.glows, ...this.masses.glows];
    this.lots = [...this.kit.lots, ...lotsFromOsm(osm.lots, (x, z) => this.occupies(x, z))];

    this.shows.push(new BellagioFountains(hf, water));
    for (const s of this.shows) this.group.add(s.object);
  }

  update(dt: number, clock: number, night: number) {
    for (const s of this.shows) s.update(dt, clock, night);
  }

  get crowd() {
    return this.kit.crowd;
  }

  /** True where a hand-built landmark or an extruded building stands (OSM filler skips these). */
  occupies(x: number, z: number) {
    return this.kit.occupies(x, z) || this.masses.covers(x, z);
  }

  addShadowCasters(shadow: ShadowMap) {
    shadow.addCaster(this.solidGeo, this.shadowMat);
    this.masses.addShadowCasters(shadow);
  }
}
