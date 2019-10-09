import tinycolor from 'tinycolor2'
import memoize from './memoize'

export const darken = memoize((baseColor, amount) => {
  return tinycolor(baseColor)
    .darken(amount)
    .toHexString()
})

export const setAlpha = memoize((baseColor, alpha) => {
  return tinycolor(baseColor).setAlpha(alpha)
})
