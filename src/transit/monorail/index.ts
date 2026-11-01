import type { Resort } from '../../strip/resort';
import type { Path } from '../path';
import { board } from './boards';
import { elevate } from '../profile';
import { buildGuideway, DECK } from './guideway';
import { monorailLoop } from './route';
import { buildStation, STATIONS } from './stations';
import { MonorailTrains, stopsOn } from './trains';

let loop: Path | null = null;

/** The Las Vegas Monorail: guideway, seven stations and the trains running it. */
export const monorail: Resort = {
  id: 'monorail',
  name: 'Las Vegas Monorail',
  signs: STATIONS.map((s) => board(s.name)),
  build(k) {
    loop = k.osm ? monorailLoop(k.osm) : null;
    if (!loop || !k.osm) return;
    loop.ys = elevate(loop, k.osm.masses, k.hf, DECK);
    buildGuideway(k, loop);
    for (const st of STATIONS) buildStation(k, loop, st);
  },
  shows: () => (loop ? [new MonorailTrains(loop, stopsOn(loop, STATIONS))] : []),
};
