const path = require('path');
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper')
  },
  ignore: [
    '**/*/*Styles.js',
    '**/*.spec.js',
    '**/*/*hexValues.js'
  ],
  showCode: true,
  showUsage: true
}
