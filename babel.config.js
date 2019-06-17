module.exports = api => {
  const env = api.env()
  const isTest = env === 'test'

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isTest ? 'commonjs' : false,
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
      ['@babel/transform-runtime', { useESModules: isTest ? false : true }],
      '@babel/plugin-transform-react-constant-elements',
    ],
  }
}
