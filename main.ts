import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = "Nene folded the welding school's acceptance letter, slid it back in the envelope, and read the whole thing aloud to her empty kitchen. Twice.";
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
