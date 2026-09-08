import { readFile, writeFile } from 'node:fs/promises';

// Change only the GLB material JSON, retaining compressed geometry verbatim.
const file = 'public/models/drift-60.glb';
const glb = await readFile(file);
const length = glb.readUInt32LE(12);
const doc = JSON.parse(glb.subarray(20, 20 + length).toString());
const palette = {
  1: { color: [0.008, 0.011, 0.016, 1], roughness: 0.38 },
  3: { roughness: 0.38, metallic: 0.7 },
  5: { color: [0.55, 0.58, 0.62, 1], roughness: 0.6 },
  6: { color: [0.48, 0.36, 0.235, 1], roughness: 0.48 },
  7: { color: [0.008, 0.013, 0.03, 1], roughness: 0.42 },
  8: { roughness: 0.38, metallic: 0.75 },
  10: { color: [0.48, 0.36, 0.235, 1], roughness: 0.65 },
};
for (const [index, material] of doc.materials.entries()) {
  const pbr = material.pbrMetallicRoughness;
  const tune = palette[index];
  if (tune?.color) pbr.baseColorFactor = tune.color;
  if (tune?.roughness) pbr.roughnessFactor = tune.roughness;
  if (tune?.metallic) pbr.metallicFactor = tune.metallic;
  if (material.extensions?.KHR_materials_transmission) {
    pbr.baseColorFactor = [0.045, 0.06, 0.075, 1];
    pbr.roughnessFactor = 0.28;
    material.extensions.KHR_materials_transmission.transmissionFactor = 0.45;
  }
}
let json = Buffer.from(JSON.stringify(doc));
json = Buffer.concat([json, Buffer.alloc((4 - json.length % 4) % 4, 32)]);
const remaining = glb.subarray(20 + length);
const header = Buffer.from(glb.subarray(0, 20));
header.writeUInt32LE(20 + json.length + remaining.length, 8);
header.writeUInt32LE(json.length, 12);
await writeFile(file, Buffer.concat([header, json, remaining]));
console.log('Updated DRIFT material palette; compressed geometry unchanged.');
