import {colors} from 'ic-snacks'

export const container = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 40,
  width: '100%',
  cursor: 'pointer',

  ':hover': {}
}

export const icon = {
  color: colors.GRAY_74,
  padding: 4,
  borderRadius: 3,
  transition: 'transform 150ms',
}

export const iconOpen = {
  transform: 'rotate(-180deg)',
}

export const iconHover = {
  background: colors.GRAY_93,
}

export const navGroupTitle = {
  fontSize: 14,
  fontWeight: 600,
  color: colors.GRAY_20,
  width: '100%',
  display: 'inline-block',
  textTransform: 'uppercase',

}

export const navGroupTitleHover = {
  color: colors.GREEN_500,
}
