// Based on the design system's base 8 spacing
// Usage:
//   import { spacing } from '../spacing/styles'
//
//   const styles = {
//     ...spacing.PADDING_MD // => { padding: 24 }
//     // Or,
//     // ...spacing.PADDING_X_MD // => { paddingLeft: 24, paddingRight: 24 }
//     // Or
//     // ...spacing.LEFT_8 // => { left: 8 }
//   }
const DIRECTIONS = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
const SPACINGS = {
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 48,
  HUGE: 64
}

const finalSpacings = {}
Object.keys(SPACINGS).forEach(spacing => {
  const pxValue = SPACINGS[spacing]
  finalSpacings[`MARGIN_${spacing}`] = { margin: pxValue }
  finalSpacings[`PADDING_${spacing}`] = { padding: pxValue }
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
