import {spacing, colors} from 'ic-snacks'

export default {
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
  content: {
    ...spacing.PADDING_XL,
    backgroundColor: colors.WHITE,
    minHeight: '100vh',
    width: '100%',
  },
}
