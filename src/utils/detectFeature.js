import _ from 'underscore'

export const supportsCSSGrid = _.memoize(() => {
  const isNodeEnv = typeof window === 'undefined'
  const userAgent = (isNodeEnv && navigator && navigator.userAgent) || ''
  const isTestEnv = userAgent.match(/(Node.js|jsdom)/)

  if (isTestEnv || isNodeEnv) { return true }

  const elm = document.createElement('div')

  return elm.style['grid-template-rows'] !== undefined
})

export default { supportsCSSGrid }
