import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
var styles = {
  root: {
    color: "" + colors.GRAY_74,
    cursor: 'inherit',
    fontSize: '16px',
    position: 'absolute',
    opacity: 0,
    transform: 'scale(1) translate(9px, 26px)',
    transformOrigin: 'left top',
    transition: 'visibility 0ms linear 250ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    pointerEvents: 'none',
    zIndex: 1,
    visibility: 'hidden'
  },
  show: {
    opacity: 1,
    transition: 'visibility 0ms linear 0ms, opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    visibility: 'visible'
  },
  disabled: {
    cursor: 'not-allowed'
  }
};

var TextFieldHint = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextFieldHint, _Component);

  function TextFieldHint() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TextFieldHint.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        show = _this$props.show,
        style = _this$props.style,
        text = _this$props.text,
        inputId = _this$props.inputId;
    return React.createElement("div", {
      id: inputId,
      style: [styles.root, style, disabled && styles.disabled, show && styles.show]
    }, text);
  };

  return TextFieldHint;
}(Component), _class2.propTypes = {
  /** Hint Text */
  text: PropTypes.string.isRequired,

  /** Disabled styling */
  disabled: PropTypes.bool,

  /** Show the hint text */
  show: PropTypes.bool,

  /** Override styles */
  style: PropTypes.object,

  /** A uniq id */
  inputId: PropTypes.string
}, _class2.defaultProps = {
  disabled: false
}, _temp)) || _class;

export default TextFieldHint;