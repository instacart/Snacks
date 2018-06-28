import {spacing, colors} from 'ic-snacks'

const groupIcon = {
  marginTop: 4,
  width: 14,
  height: 14,
}

export default {
  container: {
    backgroundColor: colors.GRAY_97,
    minHeight: '100vh',
    minWidth: '20vw',
    ...spacing.PADDING_X_SM,
    ...spacing.PADDING_Y_LG,
    borderRight: '1px solid rgba(0,0,0,0.26)',
  },

  navGroupContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  navGroupTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 24,
  },
  navGroupTitle: {
    fontSize: 14,
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
  navGroupLinks: {
    ...spacing.PADDING_LEFT_XS,
    ...spacing.MARGIN_Y_XS,
  },
  navLinkRow: {
    height: 32,
  },
  navLink: {
    fontSize: 12,
    color: '#424242',
    textDecoration: 'none'
  },
  navLinkActive: {
    fontSize: 12,
    color: '#FF8200',
  }

}

