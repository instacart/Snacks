import spacing from '../'
import { spacings } from '../'

const {
  SM,
  MD,
  LG,
  XL
} = spacings

describe('spacing', () => {
  it('exports margin and padding for all directions', () => {
    expect(spacing.MARGIN_SM).toEqual({margin: SM})
    expect(spacing.PADDING_SM).toEqual({padding: SM})
  })

  it('exports margin and padding for X and Y axes', () => {
    expect(spacing.MARGIN_X_MD).toEqual({marginLeft: MD, marginRight: MD})
    expect(spacing.PADDING_Y_MD).toEqual({paddingTop: MD, paddingBottom: MD})
  })

  it('exports margin and padding for each individual direction', () => {
    expect(spacing.MARGIN_LEFT_LG).toEqual({marginLeft: LG})
    expect(spacing.PADDING_TOP_LG).toEqual({paddingTop: LG})
  })

  it('exports positioning (top, left, right, bottom)', () => {
    expect(spacing.LEFT_XL).toEqual({left: XL})
    expect(spacing.BOTTOM_XL).toEqual({bottom: XL})
  })
})
