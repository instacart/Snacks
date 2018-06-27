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
    ...spacing.PADDING_LG,
    backgroundColor: colors.GRAY_97,
    minHeight: '100vh',
    width: '100%',
  },
  navigation: {
    minHeight: '100vh',
    width: '15vw',
    ...spacing.PADDING_X_SM,
    ...spacing.PADDING_Y_LG,
    border: '1px solid rgba(0,0,0,0.26)',
  }
}
