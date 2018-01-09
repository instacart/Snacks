const path = require('path')
const webpack = require("webpack")
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

module.exports = {
  module: {
   loaders: [
     { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
     { test: /\.svg$/, loader: 'svg-sprite-loader', exclude: /node_modules/, options: { extract: true } }
   ]
  },
  entry: {
    main: "./src/index.js"
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
    new SpriteLoaderPlugin()
  ],
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'radium': 'radium',
    'prop-types': 'prop-types'
  },
  devtool: "cheap-module-eval-source-map"
}
