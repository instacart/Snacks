import {colors, spacing} from 'ic-snacks'

export const table = {
  display: 'table',
  ...spacing.MARGIN_BOTTOM_MD,
}

export const headers = {
  display: 'table-row',
}

export const header = {
  display: 'table-cell',
  ...spacing.PADDING_BOTTOM_SM,
  ...spacing.PADDING_RIGHT_SM,
}

export const row = {
  display: 'table-row',
}

const cell = {
  display: 'table-cell',
  fontSize: 14,
  ...spacing.PADDING_BOTTOM_XS,
  ...spacing.PADDING_RIGHT_SM,
}

export const prop = {
  ...cell,
  fontFamily: 'monospace',
}

export const type = {
  ...cell,
  fontFamily: 'monospace',
  color: colors.GREEN_500,
}

export const defaultValue = {
  ...cell,
  fontFamily: 'monospace',
}

export const description = {
  ...cell,
}
