import { mkdirSync, writeFileSync } from "node:fs";

// The note, in three beats: the fridge's labor, the owner's use, the sting.
const BEATS = [
  "The ice maker made 214 cubes.",
  "You used two.",
  "I counted.",
];

const LINE = BEATS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
