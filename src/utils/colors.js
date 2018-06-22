import tinycolor from 'tinycolor2'
import memoize from 'lodash/memoize'

export const darken = memoize((baseColor, amount) => {
  return tinycolor(baseColor).darken(amount).toHexString()
})
