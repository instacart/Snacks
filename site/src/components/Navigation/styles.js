import {spacing, colors} from 'ic-snacks'

const groupIcon = {
  marginTop: 4,
  width: 14,
  height: 14,
}


export default {
  container: {
    minHeight: '100vh',
    minWidth: '20vw',
    ...spacing.PADDING_X_SM,
    ...spacing.PADDING_Y_LG,
    border: '1px solid rgba(0,0,0,0.26)',
  },

  navGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navGroupTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.GRAY_20,
  },
  navGroupIcon: {
    ...groupIcon,
    color: colors.GRAY_46,
  },
  activeGroupIcon: {
    ...groupIcon,
    color: colors.GRAY_74,
  },

}

