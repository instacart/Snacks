// This step in the build does a rough verification of the newly built dist file
// It simply imports dist/snacks.js and tries to run a few things
// This ensures we don't publish a release that will break others' code bases
// This also ensures that Snacks can be imported into a node environment

// basic importing works (most issues will appear here)
import { execSync } from 'child_process'
import * as SnacksUMD from '../../dist/snacks'
import colors from '../../src/styles/colors'
import zIndex from '../../src/styles/zIndex'

const exec = command => execSync(command, { stdio: 'inherit' })

function verifyBuild(SnacksBuild) {
  // verify colors from dist equal src
  Object.keys(SnacksBuild.colors).forEach(color => {
    if (colors[color] !== SnacksBuild.colors[color]) {
      throw new Error(
        `Snacks dist file colors do not match - expect ${colors[color]}, but saw ${
          SnacksBuild.colors[color]
        }`
      )
    }
  })

  // verify zIndex from dist equal src
  Object.keys(SnacksBuild.zIndex).forEach(zValue => {
    const sourceObj = zIndex[zValue]
    const builtObj = SnacksBuild.zIndex[zValue]

    if (sourceObj.zIndex !== builtObj.zIndex) {
      throw new Error(
        `Snacks dist file zIndex do not match - expect ${sourceObj.zIndex}, but saw ${
          builtObj.zIndex
        }`
      )
    }
  })
}

console.log('Verifying UMD build')

verifyBuild(SnacksUMD)

console.log('Verifying ESM build (bundling and importing)')

exec('yarn webpack --config=webpack.verify-esm.config.js')

const SnacksESMBundle = require('../../tmp/esm-bundle')

verifyBuild(SnacksESMBundle)

console.log('Verifying typings')

exec('yarn tsc -p tsconfig.verify-build.json')
