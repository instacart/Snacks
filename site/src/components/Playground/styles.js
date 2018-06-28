import {colors, spacing} from 'ic-snacks'

export const container = {
  display: 'flex',
}

export const preview = {
  ...spacing.MARGIN_RIGHT_SM,
  width: 0,
  flex: '1 0 0',
}

export const editor = {
  ...spacing.PADDING_SM,
  width: 0,
  margin: 0,
  flex: '1 0 0',
  overflow: 'scroll',
  backgroundColor: colors.GRAY_97,
  borderRadius: 5,
}
