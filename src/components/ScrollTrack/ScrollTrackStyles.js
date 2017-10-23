import responsive from '../../styles/responsive'
import spacing    from '../../styles/spacing'
import zIndex     from '../../styles/zIndex'

export default {
  containerStyles: {
    overflow: 'hidden',
    position: 'relative',
  },
  innerContainerStyles: {
    whiteSpace: 'nowrap',
    position: 'relative',

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
      display: 'none',
      ...zIndex.Z_INDEX1
    },
    left: spacing.LEFT_XS,
    right: spacing.RIGHT_XS
  }
}
