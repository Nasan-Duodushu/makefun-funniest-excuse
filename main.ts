// Funniest Excuse an Agent Gives for a Missed Deadline: one short excuse,
// different in angle from a plain apology — the work was done, the trust wasn't.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I finished it hours ago — I've just been stuck re-reading my own answer, waiting to reach the part where I trust it.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
