import _extends from "@babel/runtime/helpers/esm/extends";

var _innerContainerStyles;

import responsive from '../../styles/responsive';
import spacing from '../../styles/spacing';
import zIndex from '../../styles/zIndex';
export default {
  containerStyles: {
    overflow: 'hidden',
    position: 'relative'
  },
  innerContainerStyles: (_innerContainerStyles = {
    whiteSpace: 'nowrap',
    position: 'relative'
  }, _innerContainerStyles[responsive.xs] = {
    left: 'inherit',
    overflowX: 'scroll',
    display: 'block',
    msOverflowStyle: 'none',
    overflow: '-moz-scrollbars-none',
    webkitOverflowScrolling: 'touch'
  }, _innerContainerStyles),
  slideButtonStyles: {
    "default": _extends({
      position: 'absolute',
      top: '5px',
      display: 'none'
    }, zIndex.Z_INDEX1),
    left: spacing.LEFT_XS,
    right: spacing.RIGHT_XS
  }
};