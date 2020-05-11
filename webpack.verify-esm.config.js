const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  module: {
    rules: [{ test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }],
  },
  entry: './dist/esm/index.js',
  output: {
    library: 'Snacks',
    filename: 'esm-bundle.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'tmp'),
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    '@instacart/radium': '@instacart/radium',
    'prop-types': 'prop-types',
  },
  stats: 'errors-only',
}
