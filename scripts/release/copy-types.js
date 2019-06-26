import path from 'path'
import fse from 'fs-extra'
import glob from 'glob'

function copyTypes(from) {
  const to = path.resolve(__dirname, '../../dist/esm')
  const files = glob.sync('**/*.d.ts', { cwd: from })
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)))

  return Promise.all(cmds)
}

async function run() {
  await copyTypes(path.resolve(__dirname, '../../src'))
  await copyTypes(path.resolve(__dirname, '../../tmp/svgr'))
}

run()
