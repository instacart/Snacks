const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')

function copyTypes() {
  const from = path.resolve(__dirname, '../../src')
  const to = path.resolve(__dirname, '../../dist/esm')
  const files = glob.sync('**/*.d.ts', { cwd: from })
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)))

  return Promise.all(cmds)
}

copyTypes()
