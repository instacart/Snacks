import responsive from '../../Styles/responsive'

export default {
  containerStyles: {
    overflow: 'hidden',
    position: 'relative',
  },
  innerContainerStyles: {
    whiteSpace: 'nowrap',
    position: 'relative',
    transition: 'left 150ms ease-in-out',

    [responsive.xs]: {
      left: 'inherit',
      overflowX: 'scroll',
      display: 'block',
      msOverflowStyle: 'none',
      overflow: '-moz-scrollbars-none',
      webkitOverflowScrolling: 'touch'
    },
  },
  slideButtonStyles: {
    default: {
      position: 'absolute',
      zIndex: '10',
      top: '8px',
      backgroundColor: '#fff',
      border: '0',
      color: 'green',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.26), 0 1px 4px 0 rgba(0, 0, 0, 0.16)',
      transition: 'background-color 150ms ease-in-out',
      textAlign: 'center',
      lineHeight: '1',
      ':hover': {
        backgroundColor: '#f7f7f7'
      },
      ':active': {
        backgroundColor: '#f7f7f7'
      },
      ':focus': {
        backgroundColor: '#f7f7f7',
        outline: 'none'
      },
      [responsive.xs]: {
        display: 'none'
      }
    },
    left: {
      left: '8px'
    },
    right: {
      right: '8px'
    }
  }
}
