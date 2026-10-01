// Generates the dotted world map used by the Global Network section.
// Run with `npm run map`; output is committed so builds stay dependency-light.
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const require = createRequire(import.meta.url);
const topo = JSON.parse(readFileSync(require.resolve('world-atlas/land-110m.json'), 'utf8'));
const land = feature(topo, topo.objects.land);

// Keep in sync with src/lib/geo.ts
const W = 1000, LAT_TOP = 78, LAT_BOTTOM = -56, STEP = 2;
const H = Math.round((W * (LAT_TOP - LAT_BOTTOM)) / 360);
const x = (lon) => ((lon + 180) / 360) * W;
const y = (lat) => ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * H;

let d = '';
for (let lat = LAT_TOP - STEP / 2; lat > LAT_BOTTOM; lat -= STEP) {
  for (let lon = -180 + STEP / 2; lon < 180; lon += STEP) {
    if (geoContains(land, [lon, lat])) d += `M${x(lon).toFixed(1)} ${y(lat).toFixed(1)}h0`;
  }
}
writeFileSync('src/data/world-dots.json', JSON.stringify({ width: W, height: H, d }));
console.log(`wrote ${d.split('M').length - 1} dots (${W}x${H})`);
