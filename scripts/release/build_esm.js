const execSync = require('child_process').execSync

const exec = command => execSync(command, { stdio: 'inherit' })

console.log('Building ESM build...')

exec('yarn babel --out-dir dist/esm --ignore=**/__tests__/**,**/docs/** src')

// do these separately so we don't catch the svg font, it has no ignore option
exec('yarn svgr --filename-case=camel --ext="svg.js" -d dist/esm/assets src/assets')
exec('yarn svgr --filename-case=camel --ext="svg.js" -d dist/esm/components src/components')
