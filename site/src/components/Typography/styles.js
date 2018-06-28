import {colors, spacing} from 'ic-snacks'

const gray20 = {color: colors.GRAY_20}
const spaced = {characterSpacing: '0.3em'}

export const title1 = {
  ...gray20,
  fontSize: 60,
  fontWeight: 600,
  lineHeight: '82px',
}

export const title2 = {
  ...gray20,
  ...spacing.MARGIN_BOTTOM_LG,
  fontSize: 48,
  fontWeight: 400,
  lineHeight: '65px',
}

export const title3 = {
  ...gray20,
  ...spaced,
  fontSize: 32,
  fontWeight: 700,
  lineHeight: '65px',
}

export const subtitle = {
  ...gray20,
  ...spaced,
  ...spacing.MARGIN_BOTTOM_LG,
  fontSize: 20,
  lineHeight: '28px',
}

export const bodyTitle2 = {
  ...spaced,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '20px',
  color: colors.GRAY_46,
  textTransform: 'uppercase',
}