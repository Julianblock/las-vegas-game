/** A named area the HUD can call out: a resort, a stadium, a district. */
export interface Area {
  name: string;
  x: number;
  z: number;
  r: number;
  note?: string;
}

/** Resorts and landmarks on the corridor (world m), smallest radius wins where they overlap. */
export const RESORT_AREAS: Area[] = [
  { name: 'Mandalay Bay', x: 1367, z: 2650, r: 200, note: 'Gold glass Y at the south end of the Strip' },
  { name: 'Luxor', x: 1260, z: 2278, r: 160, note: 'Black glass pyramid and the Sky Beam' },
  { name: 'Excalibur', x: 1380, z: 1890, r: 150, note: 'The castle at Tropicana and the Strip' },
  { name: 'New York-New York', x: 1420, z: 1590, r: 130, note: 'A Manhattan skyline in miniature' },
  { name: 'MGM Grand', x: 1780, z: 1480, r: 200, note: 'The emerald city and its bronze lion' },
  { name: 'Park MGM', x: 1250, z: 1253, r: 120, note: 'Once the Monte Carlo' },
  { name: 'T-Mobile Arena', x: 1043, z: 1458, r: 110, note: 'Home of the Vegas Golden Knights' },
  { name: 'Aria', x: 1150, z: 830, r: 150, note: 'CityCenter\u2019s curved glass towers' },
  { name: 'The Cosmopolitan', x: 1400, z: 660, r: 90, note: 'Balconies over the Bellagio fountains' },
  { name: 'Bellagio', x: 1425, z: 330, r: 190, note: 'The lake and its dancing fountains' },
  { name: 'Caesars Palace', x: 1250, z: 0, r: 200, note: 'Jay Sarno\u2019s Rome, 1966' },
  { name: 'Flamingo', x: 1700, z: -40, r: 150, note: 'Bugsy\u2019s 1946 original, still pink' },
  { name: 'Horseshoe', x: 1680, z: 260, r: 110, note: 'The first MGM Grand, then Bally\u2019s' },
  { name: 'Paris Las Vegas', x: 1680, z: 450, r: 120, note: 'Half the Eiffel Tower' },
  { name: 'Planet Hollywood', x: 1720, z: 700, r: 130, note: 'Once the Aladdin' },
  { name: 'The Cromwell', x: 1590, z: 110, r: 50, note: 'Barbary Coast, 1979' },
  { name: 'The LINQ', x: 1720, z: -265, r: 100, note: 'Promenade and hotel' },
  { name: 'High Roller', x: 1966, z: -171, r: 80, note: '550 feet of observation wheel' },
  { name: 'Harrah\u2019s', x: 1680, z: -390, r: 100, note: 'Carnival on the Strip' },
  { name: 'The Venetian', x: 1830, z: -620, r: 170, note: 'Canals where the Sands stood' },
  { name: 'The Palazzo', x: 1994, z: -883, r: 120, note: 'The Venetian\u2019s taller sister' },
  { name: 'Sphere', x: 2514, z: -580, r: 100, note: 'The biggest screen on Earth' },
  { name: 'Hard Rock (the Mirage)', x: 1430, z: -600, r: 160, note: 'The volcano is dark; a guitar is rising' },
  { name: 'Treasure Island', x: 1660, z: -960, r: 130, note: 'Ships in Sirens\u2019 Cove' },
  { name: 'Fashion Show', x: 1932, z: -1252, r: 140, note: 'The mall under the Cloud' },
  { name: 'Wynn', x: 2160, z: -1180, r: 150, note: 'On the Desert Inn\u2019s ground' },
  { name: 'Encore', x: 2280, z: -1490, r: 130, note: 'Wynn\u2019s bronze twin' },
  { name: 'Resorts World', x: 2142, z: -2083, r: 170, note: 'Copper glass on the Stardust\u2019s site' },
  { name: 'Circus Circus', x: 2280, z: -2420, r: 180, note: 'The big top and the Adventuredome' },
  { name: 'Fontainebleau', x: 2746, z: -2432, r: 130, note: 'Blue crescent, opened 2023' },
  { name: 'Sahara', x: 3006, z: -2892, r: 170, note: 'North anchor since 1952' },
  { name: 'The Strat', x: 3003, z: -3507, r: 140, note: '1,149 feet of tower' },
  { name: 'Westgate', x: 3420, z: -2240, r: 160, note: 'Where Elvis played 837 shows' },
  { name: 'Las Vegas Convention Center', x: 3350, z: -1700, r: 350, note: 'CES, and the Boring tunnels underneath' },
  { name: 'Rio', x: 250, z: -20, r: 200, note: 'Red and blue glass across I-15' },
  { name: 'Palms', x: -500, z: 150, r: 200, note: 'Owned by the San Manuel Band since 2021' },
  { name: 'Gold Coast', x: -234, z: -109, r: 120, note: 'Locals\u2019 casino and seventy lanes of bowling' },
  { name: 'Allegiant Stadium', x: 520, z: 2830, r: 200, note: 'The Raiders\u2019 Death Star' },
  { name: 'Welcome to Fabulous Las Vegas', x: 1551, z: 3766, r: 60, note: 'Betty Willis, 1959' },
];

/** Districts of the valley around the corridor. */
export const DISTRICTS: Area[] = [
  { name: 'Harry Reid International Airport', x: 4200, z: 3600, r: 1300, note: 'Runways at the foot of the Strip' },
  { name: 'Chinatown', x: -600, z: -1060, r: 900, note: 'Spring Mountain Road\u2019s three miles of Asian plazas' },
  { name: 'Spring Valley', x: -2600, z: 0, r: 1600, note: 'Stucco and red tile out past Decatur' },
  { name: 'Downtown Las Vegas', x: 5000, z: -7000, r: 1500, note: 'Fremont Street and the old Glitter Gulch' },
];
