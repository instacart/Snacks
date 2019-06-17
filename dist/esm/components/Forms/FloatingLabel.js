import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
var styles = {
  label: {
    color: "" + colors.GRAY_46,
    cursor: 'text',
    fontSize: '16px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    pointerEvents: 'auto',
    position: 'absolute',
    transform: 'scale(1) translate(8px, 17px)',
    transformOrigin: 'left top',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    userSelect: 'none',
    zIndex: 1
  },
  "float": {
    cursor: 'inherit',
    transform: 'scale(0.85) translate(8px, 6px)',
    pointerEvents: 'none'
  },
  error: {
    color: colors.RED_700
  },
  disabled: {
    cursor: 'not-allowed',
    color: colors.GRAY_74
  }
};

var getSnackStyles = function getSnackStyles(snacksTheme) {
  var action = snacksTheme.colors.action;
  return {
    active: {
      color: action
    }
  };
};

var FloatingLabel = withTheme(_class = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FloatingLabel, _Component);

  function FloatingLabel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FloatingLabel.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _float = _this$props["float"],
        disabled = _this$props.disabled,
        hasError = _this$props.hasError,
        htmlFor = _this$props.htmlFor,
        isActive = _this$props.isActive,
        style = _this$props.style,
        text = _this$props.text,
        snacksTheme = _this$props.snacksTheme;
    var snacksStyles = getSnackStyles(snacksTheme);
    var inputStyles = [styles.label, _float && styles["float"], disabled && styles.disabled, isActive && snacksStyles.active, hasError && styles.error, style];
    return React.createElement("label", {
      htmlFor: htmlFor,
      style: inputStyles
    }, text);
  };

  return FloatingLabel;
}(Component), _class2.propTypes = {
  /** Disabled styling for the label */
  disabled: PropTypes.bool,

  /** Float the label */
  "float": PropTypes.bool,

  /** Show error styling */
  hasError: PropTypes.bool,

  /** HTML for attribute */
  htmlFor: PropTypes.string,

  /** Is the input in an active state */
  isActive: PropTypes.bool,

  /** Override styles */
  style: PropTypes.object,

  /** Label text */
  text: PropTypes.string,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
}, _class2.defaultProps = {
  disabled: false
}, _temp)) || _class) || _class;

export default FloatingLabel;