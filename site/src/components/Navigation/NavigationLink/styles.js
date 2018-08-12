import {colors, spacing} from 'ic-snacks'

export const link = {
  ...spacing.PADDING_LEFT_MD,
  height: 40,
  lineHeight: '40px',
  width: '100%',
  fontSize: 14,
  textDecoration: 'none',
  color: colors.GRAY_20,
}

export const linkActive = {
  color: colors.GREEN_500,
}

export const text = {
  display: 'inline-block',
  width: '100%',

  ':hover': {
    color: colors.GREEN_500,
  },
}