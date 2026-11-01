# Las Vegas

Fly a bird, or drive a pickup, through the Las Vegas valley: the whole Strip
resort by resort, Flamingo Road from Decatur Boulevard to the Four Corners,
downtown, Chinatown and the desert around it, built from OpenStreetMap and
elevation data and drawn in three.js.

## Running

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck and bundle into dist/
```

`npm run data` refetches the OpenStreetMap extract into `public/data/osm.json`.

## Flying

| Key | Does |
| --- | --- |
| W S / arrows | Dive, climb |
| A D / arrows | Bank |
| Q E | Rudder |
| Space | Flap; take off when perched |
| R | Sprint |
| Shift | Tuck and stoop |
| F / Ctrl | Flare and land |
| C | Camera |
| G | Land and take the pickup |
| H | Controls · Esc menu |

Circle in thermals off the hot parking lots, or ride ridge lift on the Spring
Mountains to the west.

## Driving

W/S for gas and brake, A/D to steer, Shift to floor it, Space for the
handbrake, L for headlights, V for the horn and G to get out and fly.

## What's there

- Every Strip resort with its own massing, colour, crown signs and marquee:
  the Bellagio fountains, the Mirage volcano, the Sphere's Exosphere, the
  High Roller, the Eiffel Tower, the monorail and the pedestrian bridges.
- Flamingo Road east and west, with the real strip malls, gas stations and
  fast-food signs along it, matched to the map's points of interest.
- Traffic, pedestrians, pigeons, ravens, grackles and fish in the lakes.
- Lore: walk or fly into a place to read its history, from El Rancho Vegas
  to the Caesars Palace Grand Prix, and a few ghosts after dark.

## Seasons and events

Pick a season in the menu, or let the real calendar decide:

- **Halloween**: costumes on the Strip, jack-o'-lanterns at the resort doors,
  the Sphere as a pumpkin.
- **Grand Prix** (November): the Strip Circuit traced from OpenStreetMap,
  walls, grandstands, the start gantry and twenty-two cars under the lights.
- **New Year's Eve**: the Strip closed to cars, crowds in the boulevard and
  fireworks off eight rooftops.

## Coordinates

World units are metres, x east and z south of a local origin:
`x = (lon + 115.19) * 89915`, `z = (36.116 - lat) * 111320`.
