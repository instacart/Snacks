const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const exec = command => execSync(command, { stdio: 'inherit' })

const svgrTempDir = path.resolve(process.cwd(), 'tmp/svgr')
const svgrAssetsDir = path.resolve(svgrTempDir, 'assets')
const svgrComponentsDir = path.resolve(svgrTempDir, 'components')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

// svg will complain if the --out-dir does not exist
ensureDir(svgrAssetsDir)
ensureDir(svgrComponentsDir)

console.log('Building ESM build...')

exec('yarn babel --out-dir dist/esm --ignore=**/__tests__/**,**/docs/** src')

console.log('Building icon components with svgr')

// do these separately so we don't catch the svg font, it has no ignore option
exec('yarn svgr --filename-case=camel --ext="svg.js" -d tmp/svgr/assets src/assets')
exec('yarn svgr --filename-case=camel --ext="svg.js" -d tmp/svgr/components src/components')

console.log('Babelifying icon components')

// now babel the icons
exec('yarn babel --out-dir dist/esm tmp/svgr')

console.log('Copying types...')

exec('babel-node scripts/release/copy-types.js')
