const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.svg/,
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
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true)
    })
  ],
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
