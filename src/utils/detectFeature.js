import _ from 'underscore'

export const supportsCSSGrid = _.memoize(() => {
  const userAgent = (navigator && navigator.userAgent) || ''
  const isTestEnv = userAgent.match(/(Node.js|jsdom)/)

  // NOTE: server-side rendering end test environemnt cases ignored during this step
  if (isTestEnv || !window || !window.document || !window.document) { return true }

  const elm = document.createElement('div')

  return elm.style['grid-template-rows'] !== undefined
})

export default { supportsCSSGrid }
