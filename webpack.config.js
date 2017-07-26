const webpack = require("webpack");

module.exports = {
  module: {
   loaders: [
     { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
   ]
  },
  entry: {
    main: "./src/index.js"
  },
  output: {
    library: 'Snacks',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'radium': 'radium',
    'prop-types': 'prop-types'
  },
  devtool: "cheap-module-eval-source-map"
}
