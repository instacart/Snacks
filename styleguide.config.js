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
  showUsage: true,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: '1600px'
      }
    }
  },
  theme: {
    color: {
      base: '#333',
      light: '#999',
      lightest: '#ccc',
      link: '#43B02A',
      linkHover: '#43B02A',
      border: '#BDBDBD',
      name: '#FF467E',
      type: '#5FCA44',
      error: '#fff',
      baseBackground: '#fff',
      errorBackground: '#c00',
      codeBackground: '#f7f7f7',
      sidebarBackground: '#f7f7f7',
    },
    fontFamily: {
      base: [
        'Open Sans',
        'Helvetica Neue',
        'Helvetica',
        'sans-serif'
      ]
    }
  }
}
