import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import MaskedTextField from './MaskedTextField';
var phoneRegex = /\(|\)|-| /g; // input masks by alpha-2 code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// NOTE: this currently only supports US, but will someday include other regions and countries

var inputMasks = {
  US: {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    hint: '(555) 555-5555'
  }
};

var getValue = function getValue(value) {
  return value.replace(phoneRegex, '');
};

var PhoneNumberField =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PhoneNumberField, _React$Component);

  function PhoneNumberField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getValue = function () {
      if (!_this.input) {
        return null;
      }

      return getValue(_this.input.getValue());
    };

    _this.triggerFocus = function () {
      return _this.input.wrapped.FormComponent.triggerFocus();
    };

    return _this;
  }

  var _proto = PhoneNumberField.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return React.createElement(MaskedTextField, _extends({
      type: "tel",
      mask: inputMasks.US.mask,
      maskHint: inputMasks.US.hint,
      getValue: getValue,
      ref: function ref(_ref) {
        return _this2.input = _ref;
      }
    }, this.props));
  };

  return PhoneNumberField;
}(React.Component);

PhoneNumberField.propTypes = {};
PhoneNumberField.defaultProps = {};
export default PhoneNumberField;