import _ from 'underscore'

export const supportsCSSGrid = _.memoize(() => {
  // NOTE: server-side rendering cases ignored during this step
  if (!window || !window.document || !window.document.body) { return true }

  return window.document.body.style['grid-template-rows'] !== undefined
})

export default { supportsCSSGrid }
