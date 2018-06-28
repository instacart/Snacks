import {spacing, colors} from 'ic-snacks'

const groupIcon = {
  marginTop: 4,
  width: 14,
  height: 14,
}

const navLink = {
  fontSize: 14,
  textDecoration: 'none',
}

export default {
  container: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: colors.GRAY_97,
    overflow: 'scroll',
    ...spacing.PADDING_X_LG,
    borderRight: `1px solid ${colors.GRAY_88}`,
  },
  logo: {
    ...spacing.MARGIN_TOP_LG,
    display: 'flex',
    fontSize: 24,
    fontWeight: 600,
    textDecoration: 'none',
  },
  title: {
    position: 'relative',
    top: -2,
    color: colors.GRAY_20,
  },
  carrotIcon: {
  },
  navGroupContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  navGroupTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 24,
    width: '100%',
    ':hover': {
      cursor: 'default',
    }
  },
  navGroupTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.GRAY_20,
    width: '100%',
    display: 'inline-block',
    ':hover': {
      color: colors.GREEN_500,
    }
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
    ...spacing.PADDING_LEFT_SM,
    ...spacing.MARGIN_Y_XS,
  },
  navLinkRow: {
    height: 40,
    width: '100%',
  },
  navLinkInactive: {
    ...navLink,
    color: '#424242',
  },
  navLinkText: {
    display: 'inline-block',
    width: '100%',
    ':hover': {
      color: colors.GREEN_500,
    },
  }
}
