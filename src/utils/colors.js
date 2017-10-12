import tinycolor from 'tinycolor2'
import _ from 'underscore'

export const darken = _.memoize((baseColor, amount) => {
  return tinycolor(baseColor).darken(amount).toHexString()
})
