// This file moves any static assets, like fonts, to the /docs/build folder.
// These assets will then be used by the public styleguide - https://instacart.github.io/Snacks/
const fs = require('fs-extra')

console.log('Copying static assets...')

fs.copy('src/fonts/','docs/src/fonts', err => {
  if (err) { return console.error(err) }
  console.log('Copied fonts')
})
