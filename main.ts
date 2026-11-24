import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The Wi-Fi password changes every month, but the Post-it with the new one hasn't moved since 2023.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-whitespace characters");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
