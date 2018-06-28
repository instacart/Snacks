import { spacing } from 'ic-snacks'

const icon = {
  alignSelf: 'center',
  color: '#757575',
  ...spacing.MARGIN_LEFT_XS,
}

export default {
  container: {
    ...spacing.MARGIN_BOTTOM_LG,
    ...spacing.MARGIN_TOP_XS,
    borderRadius: 4,
    border: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
    display: 'flex',
  },
  textField: {
    border: 0,
    height: 54,
    fontSize: 16,
    padding: '18px 4px 4px 6px',
    ':active': {
      border: 0,
      backgroundColor: '#FFF',
    },
    ':focus': {
      border: 0,
      backgroundColor: '#FFF',
    }
  },
  searchIcon: {
    ...icon,
    height: 24,
    width: 24,
  },
  xIcon: {
    ...icon,
    height: 18,
    width: 18,
    color: '#424242',
    paddingRight: 4,
  },
}