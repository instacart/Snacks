import {spacing, colors} from 'ic-snacks'

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
    alignItems: 'center',
    height: 40,
    width: '100%',
    cursor: 'pointer',

    ':hover': {}
  },
  navGroupTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.GRAY_20,
    width: '100%',
    display: 'inline-block',
    textTransform: 'uppercase',

  },
  navGroupTitleHover: {
    color: colors.GREEN_500,
  },
  navGroupIcon: {
    color: colors.GRAY_74,
    padding: 4,
    borderRadius: 3,
    transition: 'transform 150ms',
  },
  navGroupIconOpen: {
    transform: 'rotate(-180deg)',
  },
  navGroupIconHover: {
    background: colors.GRAY_93,
  },
  navGroupLinks: {
    ...spacing.PADDING_LEFT_SM,
  },
  navLinkRow: {
    height: 40,
    lineHeight: '40px',
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
