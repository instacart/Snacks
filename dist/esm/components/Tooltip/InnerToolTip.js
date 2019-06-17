import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Fade from '../Transitions/Fade';
import colors from '../../styles/colors';
import TooltipArrow from './TooltipArrow';
import spacing from '../../styles/spacing';
var styles = {
  root: {
    position: 'relative'
  },
  arrowPadding: {
    top: {
      paddingBottom: '9px'
    },
    bottom: {
      paddingTop: '9px'
    },
    left: {
      paddingRight: '9px'
    },
    right: {
      paddingLeft: '9px'
    }
  },
  innerContent: {
    textAlign: 'center',
    borderRadius: 4,
    whiteSpace: 'nowrap',
    fontWeight: 600
  }
};
var RESOLVED_COLOR = {
  primary: {
    background: colors.GREEN_500,
    color: '#FFF',
    border: "1px solid " + colors.GREEN_500
  },
  secondary: {
    background: '#FFF',
    color: colors.GRAY_46,
    border: "1px solid " + colors.GRAY_74
  },
  dark: {
    background: colors.GRAY_20,
    color: '#FFF',
    border: "1px solid " + colors.GRAY_20
  }
};
var RESOLVED_SIZE = {
  small: _extends({
    fontSize: '14px'
  }, spacing.PADDDING_X_XS, {
    paddingTop: '9px',
    paddingBottom: '9px'
  }),
  medium: _extends({
    fontSize: '16px',
    paddingTop: '9px',
    paddingBottom: '9px'
  }, spacing.PADDING_X_SM),
  large: _extends({
    fontSize: '18px',
    paddingTop: '12px',
    paddingBottom: '12px'
  }, spacing.PADDING_X_MD)
};

var InnerToolTip =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(InnerToolTip, _PureComponent);

  function InnerToolTip() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = InnerToolTip.prototype;

  _proto.renderArrow = function renderArrow() {
    var _this$props = this.props,
        arrowPosition = _this$props.arrowPosition,
        arrowStyle = _this$props.arrowStyle,
        snacksStyle = _this$props.snacksStyle;
    return React.createElement(TooltipArrow, {
      arrowStyle: arrowStyle,
      position: arrowPosition,
      snacksStyle: snacksStyle
    });
  };

  _proto.render = function render() {
    return React.createElement(Fade, null, this.renderArrow(), React.createElement("div", {
      style: this.contentStyles
    }, this.props.children));
  };

  _createClass(InnerToolTip, [{
    key: "contentStyles",
    get: function get() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          style = _this$props2.style,
          snacksStyle = _this$props2.snacksStyle;
      return _extends({}, styles.innerContent, RESOLVED_SIZE[size], RESOLVED_COLOR[snacksStyle], style);
    }
  }]);

  return InnerToolTip;
}(PureComponent);

InnerToolTip.propTypes = {
  children: PropTypes.node,
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.shape({
    border: PropTypes.string,
    padding: PropTypes.string,
    boxShadow: PropTypes.string
  }),
  arrowStyle: PropTypes.shape({
    border: PropTypes.string,
    boxShadowRight: PropTypes.string,
    boxShadowBottom: PropTypes.string,
    boxShadowLeft: PropTypes.string,
    boxShadowTop: PropTypes.string
  }),
  arrowPosition: PropTypes.shape({})
};
InnerToolTip.defaultProps = {
  size: 'medium',
  snacksStyle: 'dark'
};
export default InnerToolTip;