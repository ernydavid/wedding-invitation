import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require(require.resolve("sharp", {
  paths: [dirname(require.resolve("next/package.json"))],
}));
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(projectRoot, "public/assets/v2/monogram-jm-gold.png");
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()));

// ICO directory containing transparent PNG representations for browser tab sizes.
const header = Buffer.alloc(6);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length + images.length * 16;
const entries = images.map((image, index) => {
  const entry = Buffer.alloc(16);
  entry[0] = sizes[index];
  entry[1] = sizes[index];
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(image.length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += image.length;
  return entry;
});

await Promise.all([
  writeFile(resolve(projectRoot, "app/favicon.ico"), Buffer.concat([header, ...entries, ...images])),
  sharp(source).resize(192, 192).png().toFile(resolve(projectRoot, "app/icon.png")),
  sharp(source).resize(180, 180).png().toFile(resolve(projectRoot, "app/apple-icon.png")),
]);
console.log("Generated J&M favicon (16/32/48), app icon (192), and Apple icon (180).");
