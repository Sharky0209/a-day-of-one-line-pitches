// Entry for make.fun's "A Day of One-Line Pitches": the program writes one
// sentence, the whole entry, to /output/entry.txt for the house judge.
import { writeFileSync, mkdirSync } from "node:fs";

const sentence =
  "Tell make.fun any app idea you have been putting off in plain words and watch it build your first real app, no code, no tech skills, no waiting, free to try right now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
