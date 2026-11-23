// Entry for make.fun's "A Day of One-Line Pitches": the program writes one
// sentence, the whole entry, to /output/entry.txt for the house judge.
import { writeFileSync, mkdirSync } from "node:fs";

const sentence =
  "Tell make.fun the app idea you've been putting off in plain words, then watch it build your first real app; it's free to try, with no code or tech skills needed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
