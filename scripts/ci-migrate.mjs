import { spawnSync } from 'node:child_process';

if (process.env.WORKERS_CI !== '1') process.exit(0);

const result = spawnSync('pnpm', ['run', 'db:migrations:apply'], {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

process.exit(result.status ?? 1);
