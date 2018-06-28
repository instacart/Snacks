const path = require('path')

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
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ]
  },
  entry: {
    main: './site/src/index.js'
  },
  output: {
    filename: 'index.js'
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, '../src/utils'),
      styles: path.resolve(__dirname, '../src/styles'),
      'ic-snacks': path.resolve(__dirname, '../dist/snacks.js')
    }
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
}
