const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const anaylzerEnabled = process.env.analyze || false

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.svg/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
            },
          },
        ],
      },
    ],
  },
  entry: './src/index.js',
  output: {
    library: 'Snacks',
    libraryTarget: 'umd',
    filename: 'snacks.js',
    path: path.resolve(__dirname, 'tmp'),
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
    anaylzerEnabled && new BundleAnalyzerPlugin(), // optionally anaylze if flag passed in
  ].filter(i => !!i), // filter out false items
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    radium: 'radium',
    'prop-types': 'prop-types',
  },
  devtool: 'cheap-module-eval-source-map',
}
