// Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X".
// The entry itself is the X post: one post of our own that quotes make.fun's post
// (https://x.com/makefunai/status/2124915864336236646), with a photo of its own
// attached and the play code in its text. All this program does is hand the post's
// address to the grader: it reads POST.json from the repository root and writes
// it to /output/POST.json, where the gate reads it. Node 22, standard library only.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });
const payload = readFileSync(sourcePath, "utf8");

// Warn (but still copy) while POST.json holds the placeholder: the gate refuses
// it as it stands, so the post must be published and its real address,
// {"url": "https://x.com/<handle>/status/<id>"}, put in POST.json before submit.
let parsed: unknown;
try {
  parsed = JSON.parse(payload);
} catch {
  console.error(`POST.json in ${botDir} is not valid JSON.`);
  process.exit(1);
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(
    `WARNING: POST.json does not name a real X post yet (got ${JSON.stringify(url)}). ` +
      `Post first, then put its address in POST.json before submitting.`,
  );
}

writeFileSync(targetPath, payload);
console.log(`Wrote ${targetPath} for post ${url}`);
