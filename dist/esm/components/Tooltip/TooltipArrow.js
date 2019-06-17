import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
var styles = {
  arrow: {
    position: 'absolute',
    display: 'block',
    height: '12px',
    width: '12px'
  }
};
var RESOLVED_STYLE = {
  primary: {
    backgroundColor: colors.GREEN_500
  },
  secondary: {
    backgroundColor: '#FFF'
  },
  dark: {
    backgroundColor: colors.GRAY_20
  }
};
var RESOLVED_PLACEMENT = {
  top: {
    transform: 'rotate(45deg)'
  },
  bottom: {
    transform: 'rotate(45deg)'
  },
  right: {
    transform: 'rotate(-45deg)'
  },
  left: {
    transform: 'rotate(-45deg)'
  }
};
var RESOLVE_BORDER_COLOR = {
  primary: colors.GREEN_500,
  secondary: colors.GRAY_74,
  dark: colors.GRAY_20
};

var resolveStylePlacementBorders = function resolveStylePlacementBorders(style, arrowStyle, placement) {
  var borderColor = RESOLVE_BORDER_COLOR[style];
  var borderStyle = arrowStyle && arrowStyle.border ? arrowStyle.border : "1px solid " + borderColor;
  var boxShadowRight = arrowStyle && arrowStyle.boxShadowRight;
  var boxShadowBottom = arrowStyle && arrowStyle.boxShadowBottom;
  var boxShadowLeft = arrowStyle && arrowStyle.boxShadowLeft;
  var boxShadowTop = arrowStyle && arrowStyle.boxShadowTop;

  switch (placement) {
    case 'top':
      return {
        borderRight: borderStyle,
        borderBottom: borderStyle,
        boxShadow: boxShadowTop
      };

    case 'bottom':
      return {
        borderLeft: borderStyle,
        borderTop: borderStyle,
        boxShadow: boxShadowBottom
      };

    case 'right':
      return {
        borderLeft: borderStyle,
        borderTop: borderStyle,
        boxShadow: boxShadowRight
      };

    case 'left':
      return {
        borderRight: borderStyle,
        borderBottom: borderStyle,
        boxShadow: boxShadowLeft
      };
  }
};

var TooltipArrow =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TooltipArrow, _PureComponent);

  function TooltipArrow() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TooltipArrow.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      style: this.calculatedStyles
    });
  };

  _createClass(TooltipArrow, [{
    key: "calculatedStyles",
    get: function get() {
      var _this$props = this.props,
          position = _this$props.position,
          arrowStyle = _this$props.arrowStyle,
          snacksStyle = _this$props.snacksStyle;
      var borderStyle = resolveStylePlacementBorders(snacksStyle, arrowStyle, position.placement);
      return _extends({}, styles.arrow, RESOLVED_STYLE[snacksStyle], RESOLVED_PLACEMENT[position.placement], borderStyle, {
        left: position.left,
        top: position.top
      });
    }
  }]);

  return TooltipArrow;
}(PureComponent);

TooltipArrow.propTypes = {
  position: PropTypes.shape({
    left: PropTypes.number,
    top: PropTypes.number,
    placement: PropTypes.string
  }).isRequired,
  arrowStyle: PropTypes.shape({
    border: PropTypes.string,
    boxShadowRight: PropTypes.string,
    boxShadowBottom: PropTypes.string,
    boxShadowLeft: PropTypes.string,
    boxShadowTop: PropTypes.string
  }),
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark'])
};
export default TooltipArrow;