import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
var styles = {
  root: {
    color: "" + colors.RED_700,
    fontSize: '12px',
    marginTop: '2px',
    marginLeft: '1px',
    opacity: '0',
    display: 'none',
    pointerEvents: 'none',
    textAlign: 'left',
    transition: 'opacity 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  show: {
    opacity: '1',
    display: 'initial'
  }
};

var ValidationError = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ValidationError, _Component);

  function ValidationError() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ValidationError.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inputId = _this$props.inputId,
        show = _this$props.show,
        text = _this$props.text;
    return React.createElement("div", {
      style: [styles.root, show && styles.show],
      "aria-live": 'assertive',
      "aria-atomic": true,
      id: "error_" + inputId
    }, text);
  };

  return ValidationError;
}(Component), _class2.propTypes = {
  /** A uniq id */
  inputId: PropTypes.string.isRequired,

  /** Error text */
  text: PropTypes.string,

  /** Whether to show the error or not */
  show: PropTypes.bool
}, _temp)) || _class;

export default ValidationError;