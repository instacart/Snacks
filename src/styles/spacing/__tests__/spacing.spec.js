import spacing, { spacings } from '..'

const { SM, MD, LG, XL } = spacings

const isShorthand = rulesObj =>
  rulesObj.hasOwnProperty('margin') || rulesObj.hasOwnProperty('spacing')

describe('spacing', () => {
  it('exports spacings', () => {
    Object.keys(spacings).forEach(value => {
      expect(spacing[value]).toEqual(spacings[value])
    })
  })

  it('does not use shorthand properties', () => {
    Object.keys(spacing).forEach(value => {
      expect(isShorthand(spacing[value])).toEqual(false)
    })
  })

  it('exports margin and padding for all directions', () => {
    expect(spacing.MARGIN_SM).toEqual({
      marginLeft: SM,
      marginRight: SM,
      marginTop: SM,
      marginBottom: SM,
    })
    expect(spacing.PADDING_SM).toEqual({
      paddingLeft: SM,
      paddingRight: SM,
      paddingTop: SM,
      paddingBottom: SM,
    })
  })

  it('exports margin and padding for X and Y axes', () => {
    expect(spacing.MARGIN_X_MD).toEqual({ marginLeft: MD, marginRight: MD })
    expect(spacing.PADDING_Y_MD).toEqual({ paddingTop: MD, paddingBottom: MD })
  })

  it('exports margin and padding for each individual direction', () => {
    expect(spacing.MARGIN_LEFT_LG).toEqual({ marginLeft: LG })
    expect(spacing.PADDING_TOP_LG).toEqual({ paddingTop: LG })
  })

  it('exports positioning (top, left, right, bottom)', () => {
    expect(spacing.LEFT_XL).toEqual({ left: XL })
    expect(spacing.BOTTOM_XL).toEqual({ bottom: XL })
  })
})
