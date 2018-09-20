// Based on the design system's base 8 spacing
// Usage:
//   import { spacing } from '../spacing/styles'
//
//   const styles = {
//     ...spacing.PADDING_MD // => { padding: 24 }
//     // Or,
//     // ...spacing.PADDING_X_MD // => { paddingLeft: 24, paddingRight: 24 }
//     // Or
//     // ...spacing.LEFT_XS // => { left: 8 }
//   }
const DIRECTIONS = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
export const spacings = {
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 48,
  HUGE: 64
}

const createXRules = (type, value) => ({
  [`${type}Left`]: value,
  [`${type}Right`]: value
})

const createYRules = (type, value) => ({
  [`${type}Top`]: value,
  [`${type}Bottom`]: value
})

const finalSpacings = {}
Object.keys(spacings).forEach(spacing => {
  const pxValue = spacings[spacing]

  finalSpacings[`MARGIN_${spacing}`] = {
    ...createXRules('margin', pxValue),
    ...createYRules('margin', pxValue)
  }
  finalSpacings[`PADDING_${spacing}`] = {
    ...createXRules('padding', pxValue),
    ...createYRules('padding', pxValue)
  }

  finalSpacings[`PADDING_X_${spacing}`] = createXRules('padding', pxValue)
  finalSpacings[`PADDING_Y_${spacing}`] = createYRules('padding', pxValue)
  finalSpacings[`MARGIN_X_${spacing}`] = createXRules('margin', pxValue)
  finalSpacings[`MARGIN_Y_${spacing}`] = createYRules('margin', pxValue)

  DIRECTIONS.forEach(direction => {
    finalSpacings[`MARGIN_${direction}_${spacing}`] = {
      [`margin${capitalize(direction)}`]: pxValue
    }
    finalSpacings[`PADDING_${direction}_${spacing}`] = {
      [`padding${capitalize(direction)}`]: pxValue
    }
    finalSpacings[`${direction}_${spacing}`] = {
      [`${direction.toLowerCase()}`]: pxValue
    }
  })
})

function capitalize(s) {
  const str = s.toLowerCase()
  return str.toLowerCase()[0].toUpperCase() + str.slice(1)
}

export default { ...finalSpacings, ...spacings }
