import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
const MAX_WIDTH = 1600;
const QUALITY = 80;
const KEEP_ORIGINALS = process.argv.includes("--keep");
const EXT = /\.(jpe?g|png)$/i;

const walk = async (dir) => {
  let out = [];
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out; // folder nahi hai to kuch nahi karna
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(await walk(full));
    else if (EXT.test(e.name)) out.push(full);
  }
  return out;
};

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const files = await walk(ROOT);
if (files.length === 0) {
  console.log("optimize-images: convert karne ke liye koi jpg/png nahi mili. OK.");
  process.exit(0);
}

const { default: sharp } = await import("sharp");
let before = 0;
let after = 0;

for (const file of files) {
  const out = file.replace(EXT, ".webp");
  try {
    const inSize = (await stat(file)).size;
    await sharp(file)
      .rotate() // phone photo ki orientation theek karta hai
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    const outSize = (await stat(out)).size;
    before += inSize;
    after += outSize;
    if (!KEEP_ORIGINALS) await unlink(file);
    console.log(`  ${path.relative(ROOT, file)}  ${kb(inSize)} -> ${path.basename(out)} ${kb(outSize)}`);
  } catch (err) {
    console.error(`  FAILED ${path.relative(ROOT, file)}: ${err.message}`);
  }
}

console.log(`optimize-images: ${files.length} image(s), ${kb(before)} -> ${kb(after)}`);