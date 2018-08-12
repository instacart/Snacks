import {spacing, colors} from 'ic-snacks'

export const container = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  backgroundColor: colors.GRAY_97,
  overflow: 'scroll',
  ...spacing.PADDING_X_LG,
  borderRight: `1px solid ${colors.GRAY_88}`,
}

export const logo = {
  ...spacing.MARGIN_TOP_LG,
  display: 'flex',
  fontSize: 24,
  fontWeight: 600,
  textDecoration: 'none',
}

export const title = {
  position: 'relative',
  top: -2,
  color: colors.GRAY_20,
}

