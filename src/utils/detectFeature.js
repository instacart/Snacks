import _ from 'underscore'

export const supportsCSSGrid = _.memoize(() => {
  if (isNodeEnv() || isTestEnv()) { return true }

  const elm = document.createElement('div')

  return elm.style['grid-template-rows'] !== undefined
})

export const isNodeEnv = () => typeof window === 'undefined'

export const isTestEnv = () => {
  const userAgent = (window && window.navigator && navigator.userAgent) || ''
  return userAgent.match(/(Node.js|jsdom)/)
}

export default { isNodeEnv, isTestEnv, supportsCSSGrid }
