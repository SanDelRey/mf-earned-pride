import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'He came back to the pool at sixty-two, swam the whole hour without stopping, and told no one, which is how you know it counted.';
const OUT = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), LINE + '\n');
