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

const finalSpacings = {}
Object.keys(spacings).forEach(spacing => {
  const pxValue = spacings[spacing]

  finalSpacings[`MARGIN_${spacing}`] = { margin: pxValue }
  finalSpacings[`PADDING_${spacing}`] = { padding: pxValue }

  finalSpacings[`PADDING_X_${spacing}`] = { paddingLeft: pxValue, paddingRight: pxValue }
  finalSpacings[`PADDING_Y_${spacing}`] = { paddingTop: pxValue, paddingBottom: pxValue }
  finalSpacings[`MARGIN_X_${spacing}`] = { marginLeft: pxValue, marginRight: pxValue }
  finalSpacings[`MARGIN_Y_${spacing}`] = { marginTop: pxValue, marginBottom: pxValue }

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

export default { ...finalSpacings }
