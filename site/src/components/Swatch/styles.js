import {colors} from 'ic-snacks'

const container = {
  width: 200,
  height: 200,
  margin: '0 15px 15px 0',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
  overflow: 'hidden',
  boxSizing: 'border-box',
}

export const unselected = {
  ...container,
  boxShadow: 'rgba(0, 0, 0, 0.16) 1px 1px 5px',
}

export const selected = {
  ...container,
  borderWidth: 2,
  borderStyle: 'solid',
}

export const swatch = {
  flexBasis: '125px',
}

export const info = {
  fontSize: 16,
  fontWeight: 600,
  color: colors.GRAY_46,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
}
