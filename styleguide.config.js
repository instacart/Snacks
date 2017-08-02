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
  require: [
    path.join(__dirname, 'lib/styleguide/themeSetup')
  ],
  showCode: true,
  showUsage: true,
  styles: {
    StyleGuide: {
      content: {
        maxWidth: '1600px'
      }
    },
    ReactComponent: {
      root: {
        marginBottom: '48px',
        backgroundColor: '#fff',
        padding: '16px'
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
      baseBackground: '#f7f7f7',
      errorBackground: '#E6003D',
      codeBackground: '#fff',
      sidebarBackground: '#fff',
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
