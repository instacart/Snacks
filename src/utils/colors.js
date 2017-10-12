import tinycolor from 'tinycolor2'
import _ from 'underscore'

export const darken = _.memoize((baseColor, amount) => {
  let nextColor
  try {
    nextColor = tinycolor(baseColor).darken(amount).toHexString()
  } catch (e) {
    nextColor = baseColor
  }
  return nextColor
})
