import { readFileSync } from 'fs';

// -------------------------------------------------------------------------------
// Clean
// -------------------------------------------------------------------------------

export async function clean() {
  await folder('dist').delete();
}

// -------------------------------------------------------------------------------
// Build
// -------------------------------------------------------------------------------

export async function devbuild(target = 'dist') {
  await clean();
  await shell(`tsc -p ./configs/tsconfig.cjs.json --outDir ${target}`);
  await folder(target).add('package.json');
}

export async function build(target = 'dist') {
  await clean();
  await shell(`tsc -p ./configs/tsconfig.cjs.json --outDir ${target}`);
  await folder(target).add('.npmrc');
  await folder(target).add('package.json');
  await folder(target).add('readme.md');
  await folder(target).add('license');
  await folder(target).add('changelog.md');
  await shell(`cd ${target} && npm pack`);
}

// -------------------------------------------------------------
// Publish
// -------------------------------------------------------------

export async function publish(target = 'dist') {
  await build();
  const { version } = JSON.parse(readFileSync('package.json', 'utf8'));
  await shell(`cd ${target} && npm publish sapi-core-${version}.tgz`);
}
