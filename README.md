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
