import responsive from 'styles/responsive'
import spacing    from 'styles/spacing'

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
      top: '5px',
    },
    left: spacing.LEFT_XS,
    right: spacing.RIGHT_XS
  }
}
