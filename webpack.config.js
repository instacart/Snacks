const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: [
          /SVGIcon\/icons\/\w+\.svg$/, // Icons
          /assets\/\w+\.svg$/          // Radio/Checkbox
        ],
        loader: 'svgr/webpack',
        exclude: /node_modules/,
        options: { extract: true }
      },
    ]
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    library: 'Snacks',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'radium': 'radium',
    'prop-types': 'prop-types'
  },
  devtool: 'cheap-module-eval-source-map'
}
