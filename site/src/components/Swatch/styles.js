import {colors, spacing} from 'ic-snacks'

export const container = backgroundColor => ({
  width: 200,
  height: 200,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: 'white',
  backgroundColor,
  transition: 'transform 150ms',

  ':hover': {
    transform: 'scale(1.1, 1.1)',
    zIndex: 1,
  }
})

const info = {
  ...spacing.MARGIN_LEFT_SM,
}

export const name = {
  ...info,
  marginBottom: 4,
}

export const value = {
  ...info,
  ...spacing.MARGIN_BOTTOM_SM,
  fontWeight: 600,
}

export const star = {
  position: 'absolute',
  top: spacing.SM,
  left: spacing.SM,
}

export const inverted = {
  color: colors.GRAY_13,
}
