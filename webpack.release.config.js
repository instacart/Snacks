const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
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
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  output: {
    library: 'Snacks',
    libraryTarget: 'umd',
    filename: 'snacks.js',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    radium: 'radium',
    'prop-types': 'prop-types',
  },
}
