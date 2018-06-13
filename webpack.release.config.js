const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /assets\/\w+\.svg$/, loader: 'svg-sprite-loader', exclude: /node_modules/, options: { extract: true } },
      { test: /SVGIcon\/icons\/\w+\.svg$/, loader: 'svgr/webpack', exclude: /node_modules/, options: { extract: true } },
    ]
  },
  entry: {
    snacks: './src/index.js'
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
  plugins: [
    new SpriteLoaderPlugin(),

    // minification and uglification
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
    })
  ],
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'radium': 'radium',
    'prop-types': 'prop-types'
  }
}
