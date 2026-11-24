// One Emoji, One Smile — make.fun bounty entry (u-0xkianno-one-emoji-one-smile-5470751f)
//
// Writes exactly one emoji to /output/entry.txt: a big, genuine, open smile.
// Chosen because a stranger reads it at a glance as warm, friendly and
// gently cheerful, with no context, irony or intimacy needed: it is the
// kind of face most likely to make someone smile back.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "\u{1F604}"; // 😄 grinning face with smiling eyes

// Guard the gate before writing: exactly one emoji, no words, no newline.
if ([...ENTRY].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
