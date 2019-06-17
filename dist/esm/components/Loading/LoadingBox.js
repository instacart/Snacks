import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

var _class, _class2, _temp;

import Radium from 'radium';
import { colors } from 'styles';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

var buildKeyFramesStyles = function buildKeyFramesStyles(startColor, endColor, name) {
  return {
    animationName: Radium.keyframes({
      '0%': {
        backgroundColor: startColor
      },
      '50%': {
        backgroundColor: endColor
      },
      '100%': {
        backgroundColor: startColor
      }
    }, name),
    backgroundColor: startColor
  };
};

var baseLoadingStyle = _extends({
  animation: 'x 3s ease-in-out infinite'
}, buildKeyFramesStyles(colors.GRAY_93, colors.GRAY_88, 'loading'), {
  width: '100%',
  height: '20px'
});

var backgroundStyles = {
  dark: buildKeyFramesStyles(colors.GRAY_88, colors.GRAY_74, 'darkLoading'),
  light: buildKeyFramesStyles(colors.GRAY_97, colors.GRAY_93, 'lightLoading')
};
var shapeStyles = {
  circle: {
    borderRadius: '50%',
    height: 100,
    width: 100
  },
  square: {
    height: 100,
    width: 100
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    width: 150
  }
};

var determineStyle = function determineStyle(background, shape, size) {
  var sizeStyles = !shape || shape === 'line' ? {
    width: size
  } : {
    width: size,
    height: size
  };
  return _extends({}, backgroundStyles[background] || {}, shapeStyles[shape] || {}, size ? sizeStyles : {});
};

var LoadingBox = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(LoadingBox, _PureComponent);

  function LoadingBox() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = LoadingBox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        background = _this$props.background,
        shape = _this$props.shape,
        size = _this$props.size,
        style = _this$props.style;

    var boxStyle = _extends({}, baseLoadingStyle, determineStyle(background, shape, size), style);

    return React.createElement("div", {
      style: boxStyle
    });
  };

  return LoadingBox;
}(PureComponent), _class2.propTypes = {
  /** Use for rendering dark backgrounds. */
  background: PropTypes.oneOf(['light', 'dark']),

  /** Use for rendering light backgrounds, overrides dark */
  shape: PropTypes.oneOf(['circle', 'square', 'line']),

  /**
   *  By default, `size` will determine the components width.
   *
   *  If the `shape` is prop `circle` or `square`, `size` will apply to height and width.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Optional style overrides. */
  style: PropTypes.object
}, _temp)) || _class;

export default LoadingBox;