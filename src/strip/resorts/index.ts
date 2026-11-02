import type { Resort } from '../resort';
import { gateway } from './gateway';
import { neonMuseum } from './neonMuseum';
import { urbanGallery } from './urbanGallery';
import { fremontEast } from './fremontEast';
import { flamingoRoad } from './flamingoRoad';
import { arizonaCharlies } from './arizonaCharlies';
import { goldSpike } from './downtown/goldSpike';
import { goldenGate } from './downtown/goldenGate';
import { californiaHotel } from './downtown/californiaHotel';
import { mainStreetStation } from './downtown/mainStreetStation';
import { elCortezHotel } from './downtown/elCortezHotel';
import { downtownGrand } from './downtown/downtownGrand';
import { theD } from './downtown/theD';
import { fremontHotel } from './downtown/fremontHotel';
import { fourQueens } from './downtown/fourQueens';
import { binions } from './downtown/binions';
import { goldenNugget } from './downtown/goldenNugget';
import { circa } from './downtown/circa';
import { plaza } from './downtown/plaza';
import { fremontStreet } from './downtown';
import { tuscany } from './tuscany';
import { platinum } from './platinum';
import { vdara } from './vdara';
import { virgin } from './virgin';
import { lvcc } from './lvcc';
import { allegiant } from './allegiant';
import { airport } from '../../air';
import { grandPrix } from '../../events/grandprix';
import { halloween } from '../../events/halloween';
import { fourthOfJuly } from '../../events/july4';
import { lunarNewYear } from '../../events/lunar';
import { ces } from '../../events/ces';
import { newYear } from '../../events/newyear';
import { westgate } from './westgate';
import { planetHollywood } from './planetHollywood';
import { fontainebleau } from './fontainebleau';
import { resortsWorld } from './resortsWorld';
import { circus } from './circus';
import { sahara } from './sahara';
import { strat } from './strat';
import { welcome } from './welcome';
import { ballpark } from './ballpark';
import { arena } from './arena';
import { parkMgm } from './parkMgm';
import { mandalay } from './mandalay';
import { luxor } from './luxor';
import { excalibur } from './excalibur';
import { mgmGrand } from './mgmGrand';
import { nyny } from './nyny';
import { veer } from './veer';
import { aria } from './aria';
import { cosmopolitan } from './cosmopolitan';
import { roadside } from '../roadside';
import { goldCoast } from './goldCoast';
import { palms } from './palms';
import { rio } from './rio';
import { harrahs } from './harrahs';
import { fashionShow } from './fashionShow';
import { wynn } from './wynn';
import { ti } from './ti';
import { mirage } from './mirage';
import { venetian } from './venetian';
import { sphere } from './sphere';
import { linq } from './linq';
import { paris } from './paris';
import { vanderpump } from './vanderpump';
import { horseshoe } from './horseshoe';
import { bellagio } from './bellagio';
import { caesars } from './caesars';
import { flamingo } from './flamingo';
import { monorail } from '../../transit/monorail';
import { skywalks } from '../skywalks';

/** Every landmark module on the corridor, roughly south to north along the Boulevard, then Flamingo Road west. */
export const RESORTS: Resort[] = [
  flamingo,
  caesars,
  bellagio,
  horseshoe,
  vanderpump,
  paris,
  linq,
  sphere,
  venetian,
  mirage,
  ti,
  wynn,
  fashionShow,
  harrahs,
  rio,
  palms,
  goldCoast,
  cosmopolitan,
  aria,
  veer,
  nyny,
  mgmGrand,
  excalibur,
  luxor,
  mandalay,
  parkMgm,
  arena,
  ballpark,
  welcome,
  strat,
  sahara,
  circus,
  resortsWorld,
  fontainebleau,
  monorail,
  skywalks,
  planetHollywood,
  westgate,
  halloween,
  grandPrix,
  newYear,
  fourthOfJuly,
  lunarNewYear,
  ces,
  airport,
  allegiant,
  lvcc,
  virgin,
  vdara,
  platinum,
  tuscany,
  fremontStreet,
  plaza,
  circa,
  goldenNugget,
  binions,
  fourQueens,
  fremontHotel,
  theD,
  downtownGrand,
  elCortezHotel,
  mainStreetStation,
  californiaHotel,
  goldenGate,
  goldSpike,
  arizonaCharlies,
  neonMuseum,
  gateway,
  urbanGallery,
  fremontEast,
  // Last: chain signs skip ground the landmarks above have reserved.
  roadside,
];
