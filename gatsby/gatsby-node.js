const path = require('path')

exports.onCreateBabelConfig = ({actions: {setBabelPlugin}}) => {
  setBabelPlugin({
    name: 'babel-plugin-transform-decorators-legacy'
  })
}
