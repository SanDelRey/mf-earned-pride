import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = "He came back to the pool at sixty-two, swam the whole hour without stopping, and told no one, which is how you know it counted.";
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
