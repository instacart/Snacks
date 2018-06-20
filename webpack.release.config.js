const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.svg/,
        loader: 'svgr/webpack',
        exclude: /node_modules/,
        options: { extract: true }
      }
    ]
  },
  entry: {
    main: './src/index.js'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          keep_classnames: true,
          keep_fnames: true
        },
      })
    ]
  },
  output: {
    library: 'Snacks',
    libraryTarget: 'umd',
    filename: 'snacks.js'
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
  }
}
