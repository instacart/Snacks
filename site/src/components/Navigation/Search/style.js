import { spacing } from 'ic-snacks'

export default {
  container: {
    ...spacing.PADDING_XS,
    ...spacing.MARGIN_BOTTOM_LG,
    ...spacing.MARGIN_TOP_XS,
    borderRadius: 4,
    border: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    height: 24,
    width: 24,
    ...spacing.PADDING_RIGHT_XS ,
  },
  placeHolder: {
    color: '#D8D8D8',
  }
}