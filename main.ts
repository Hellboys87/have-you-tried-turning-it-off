import * as fs from "node:fs";
import * as path from "node:path";

// One funny single-line reply from a hopeless tech support agent to a
// desperate customer. Written for the make.fun bounty
// "Have You Tried Turning It Off?".
const LINE =
  "Have you tried turning it off and on again? It's the only trick I know, and honestly, it worked once \u2014 on my own laptop, in 2019.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
