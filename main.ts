import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finished your spreadsheet, then my cursor slipped, deleting the only copy at 3:47 a.m. while I was congratulating myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
