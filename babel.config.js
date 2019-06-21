function isBabelNode(caller) {
  return !!(caller && caller.name === '@babel/node')
}

module.exports = api => {
  const env = api.env()
  const isNode = api.caller(isBabelNode)
  const isTest = env === 'test'

  const useESModules = !isTest && !isNode

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: useESModules ? false : 'commonjs',
          loose: true,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
      ['@babel/transform-runtime', { useESModules }],
      '@babel/plugin-transform-react-constant-elements',
    ],
  }
}
