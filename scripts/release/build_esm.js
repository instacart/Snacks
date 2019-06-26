import { execSync } from 'child_process'

const exec = command => execSync(command, { stdio: 'inherit' })

console.log('Building ESM build...')

exec('yarn babel --out-dir dist/esm --ignore=**/__tests__/**,**/docs/** src')

console.log('Building icon components with svgr')

function buildIconComponents(args = []) {
  const finalArgs = [...args, '--filename-case=camel', '--no-prettier']
  exec(`yarn svgr ${finalArgs.join(' ')} -d tmp/svgr/assets src/assets`)
  exec(`yarn svgr ${finalArgs.join(' ')} -d tmp/svgr/components src/components`)
}

// build the JS files
buildIconComponents(['--ext="svg.js"'])
// build the d.ts files
buildIconComponents(['--ext="svg.d.ts"', '--template scripts/svgDtsTemplate.js'])

console.log('Babelifying icon components')

// now babel the icons
exec('yarn babel --out-dir dist/esm tmp/svgr')

console.log('Copying types...')

exec('babel-node scripts/release/copy-types.js')
