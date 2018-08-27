// This step in the build does a rough verification of the newly built dist file
// It simply imports dist/snacks.js and tries to run a few things
// This ensures we don't publish a release that will break others' code bases
// This also ensures that Snacks can be imported into a node environment

// basic importing works (most issues will appear here)
import * as Snacks from '../../dist/snacks'
import colors from '../../src/styles/colors'
import zIndex from '../../src/styles/zIndex'

// verify colors from dist equal src
Object.keys(Snacks.colors).forEach((color) => {
  if (colors[color] !== Snacks.colors[color]) {
    throw new Error(`Snacks dist file colors do not match - expect ${colors[color]}, but saw ${Snacks.colors[color]}`)
  }
})

Object.keys(Snacks.zIndex).forEach((zValue) => {
  const sourceObj = zIndex[zValue]
  const builtObj = Snacks.zIndex[zValue]

  if (sourceObj.zIndex !== builtObj.zIndex) {
    throw new Error(`Snacks dist file zIndex do not match - expect ${sourceObj.zIndex}, but saw ${builtObj.zIndex}`)
  }
})
