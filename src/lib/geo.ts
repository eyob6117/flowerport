import map from '../data/world-dots.json';

// Must match the projection in scripts/build-map.mjs
const LAT_TOP = 78;
const LAT_BOTTOM = -56;

export const MAP_W = map.width;
export const MAP_H = map.height;
export const MAP_DOTS = map.d;

export const project = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * MAP_W,
  y: ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * MAP_H,
});

/** A gently arced quadratic path between two points, bowed away from the equator. */
export function arc(from: { x: number; y: number }, to: { x: number; y: number }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const lift = Math.min(dist * 0.28, 110);
  return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q${mx.toFixed(1)} ${(my - lift).toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}
