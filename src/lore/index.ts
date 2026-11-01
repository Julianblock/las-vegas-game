import type { Spot } from './spot';
import { oscarsSpot } from './spots/oscars';
import { orleansArenaSpot } from './spots/orleans-arena';
import { huntridgeSpot } from './spots/huntridge';
import { bonanzaGiftSpot } from './spots/bonanza-gift';
import { pierosSpot } from './spots/pieros';
import { binionsSpot } from './spots/binions';
import { goldenGateSpot } from './spots/golden-gate';
import { springsPreserveSpot } from './spots/springs-preserve';
import { pawnStarsSpot } from './spots/pawn-stars';
import { containerParkSpot } from './spots/container-park';
import { atomicLiquorsSpot } from './spots/atomic-liquors';
import { pinballHallSpot } from './spots/pinball-hall';
import { peppermillSpot } from './spots/peppermill';
import { area15Spot } from './spots/area15';
import { palaceStationSpot } from './spots/palace-station';
import { lotusOfSiamSpot } from './spots/lotus-of-siam';
import { hofbrauhausSpot } from './spots/hofbrauhaus';
import { doubleDownSpot } from './spots/double-down';
import { monorailSpot } from './spots/monorail';
import { paradiseSpot } from './spots/paradise';
import { atomicSpot } from './spots/atomic';
import { neonBoneyardSpot } from './spots/neon-boneyard';
import { mobMuseumSpot } from './spots/mob-museum';
import { elCortezSpot } from './spots/el-cortez';
import { fremontSpot } from './spots/fremont';
import { landmarkSpot } from './spots/landmark';
import { grandPrixSpot } from './spots/grand-prix';
import { caesarsGrandPrixSpot } from './spots/caesars-grand-prix';
import { fourCornersSpot } from './spots/four-corners';
import { oneOctoberSpot } from './spots/one-october';
import { gracelandChapelSpot } from './spots/graceland-chapel';
import { littleWhiteChapelSpot } from './spots/little-white-chapel';
import { virginSpot } from './spots/virgin';
import { unlvSpot } from './spots/unlv';
import { lvccSpot } from './spots/lvcc';
import { chinatownSpot } from './spots/chinatown';
import { ellisIslandSpot } from './spots/ellis-island';
import { guardianAngelSpot } from './spots/guardian-angel';
import { elRanchoSpot } from './spots/el-rancho';
import { frontierSpot } from './spots/frontier';
import { aladdinSpot } from './spots/aladdin';
import { allegiantSpot } from './spots/allegiant';
import { bellagioSpot } from './spots/bellagio';
import { caesarsSpot } from './spots/caesars';
import { circusCircusSpot } from './spots/circus-circus';
import { citycenterSpot } from './spots/citycenter';
import { cosmopolitanSpot } from './spots/cosmopolitan';
import { cromwellSpot } from './spots/cromwell';
import { decaturSpot } from './spots/decatur';
import { eiffelLegsSpot } from './spots/eiffel-legs';
import { excaliburSpot } from './spots/excalibur';
import { fashionShowSpot } from './spots/fashion-show';
import { flamingoSpot } from './spots/flamingo';
import { flamingoRoadSpot } from './spots/flamingo-road';
import { fontainebleauSpot } from './spots/fontainebleau';
import { fountainsSpot } from './spots/fountains';
import { goldCoastSpot } from './spots/gold-coast';
import { habitatSpot } from './spots/habitat';
import { halloweenSpot } from './spots/halloween';
import { harrahsSpot } from './spots/harrahs';
import { highRollerSpot } from './spots/high-roller';
import { horseshoeSpot } from './spots/horseshoe';
import { hughesSpot } from './spots/hughes';
import { kovalSpot } from './spots/koval';
import { luxorSpot } from './spots/luxor';
import { mandalaySpot } from './spots/mandalay';
import { mgmLionSpot } from './spots/mgm-lion';
import { mirageSpot } from './spots/mirage';
import { nynySpot } from './spots/nyny';
import { palmsSpot } from './spots/palms';
import { parisSpot } from './spots/paris';
import { parkMgmSpot } from './spots/park-mgm';
import { rioSpot } from './spots/rio';
import { rivieraSpot } from './spots/riviera';
import { saharaSpot } from './spots/sahara';
import { siegfriedRoySpot } from './spots/siegfried-roy';
import { skyBeamSpot } from './spots/sky-beam';
import { sphereSpot } from './spots/sphere';
import { sphereTopSpot } from './spots/sphere-top';
import { stardustSpot } from './spots/stardust';
import { stratSpot } from './spots/strat';
import { stratTopSpot } from './spots/strat-top';
import { tiSpot } from './spots/ti';
import { tmobileSpot } from './spots/tmobile';
import { tropicanaSpot } from './spots/tropicana';
import { venetianSpot } from './spots/venetian';
import { welcomeSignSpot } from './spots/welcome-sign';
import { westgateSpot } from './spots/westgate';
import { wynnSpot } from './spots/wynn';

/** Every story on the map, Flamingo Road west to east, then the Strip south to north. */
export const SPOTS: Spot[] = [
  flamingoRoadSpot,
  decaturSpot,
  goldCoastSpot,
  palmsSpot,
  rioSpot,
  caesarsSpot,
  bellagioSpot,
  fountainsSpot,
  flamingoSpot,
  habitatSpot,
  horseshoeSpot,
  cromwellSpot,
  kovalSpot,
  hughesSpot,
  welcomeSignSpot,
  allegiantSpot,
  mandalaySpot,
  luxorSpot,
  excaliburSpot,
  tropicanaSpot,
  nynySpot,
  mgmLionSpot,
  tmobileSpot,
  parkMgmSpot,
  citycenterSpot,
  cosmopolitanSpot,
  aladdinSpot,
  parisSpot,
  eiffelLegsSpot,
  highRollerSpot,
  harrahsSpot,
  venetianSpot,
  sphereSpot,
  sphereTopSpot,
  mirageSpot,
  siegfriedRoySpot,
  tiSpot,
  fashionShowSpot,
  wynnSpot,
  stardustSpot,
  rivieraSpot,
  circusCircusSpot,
  fontainebleauSpot,
  saharaSpot,
  stratSpot,
  stratTopSpot,
  westgateSpot,
  skyBeamSpot,
  halloweenSpot,
  frontierSpot,
  elRanchoSpot,
  guardianAngelSpot,
  ellisIslandSpot,
  chinatownSpot,
  lvccSpot,
  unlvSpot,
  virginSpot,
  littleWhiteChapelSpot,
  gracelandChapelSpot,
  oneOctoberSpot,
  fourCornersSpot,
  caesarsGrandPrixSpot,
  grandPrixSpot,
  landmarkSpot,
  fremontSpot,
  elCortezSpot,
  mobMuseumSpot,
  neonBoneyardSpot,
  atomicSpot,
  paradiseSpot,
  monorailSpot,
  doubleDownSpot,
  hofbrauhausSpot,
  lotusOfSiamSpot,
  palaceStationSpot,
  area15Spot,
  peppermillSpot,
  pinballHallSpot,
  atomicLiquorsSpot,
  containerParkSpot,
  pawnStarsSpot,
  springsPreserveSpot,
  goldenGateSpot,
  binionsSpot,
  pierosSpot,
  bonanzaGiftSpot,
  huntridgeSpot,
  orleansArenaSpot,
  oscarsSpot,
];
