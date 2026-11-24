// Alien Field Notes: The Two Day Earth Review
// A one-line review of planet Earth, written by an alien tourist.
// The line is anchored on one concrete human habit — standing and
// watching a microwave count down — with the alien's own frame
// (a launch sequence) as the punch, and a review-style verdict.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Earth: 4/5 stars. The locals built a box that beeps when food is ready, then stand and watch it count down 90 seconds like it's a launch sequence. Would orbit again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to /output/entry.txt`);
