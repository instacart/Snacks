import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import omit from '../../utils/omit';
import MaskedTextField, { maskedTextFieldPropTypes } from './MaskedTextField';
var mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
var hint = 'MM/DD/YYYY';
var pipe = createAutoCorrectedDatePipe('mm/dd/yyyy');

var getValue = function getValue(value) {
  return value;
};

export var dateFieldPropTypes = omit(maskedTextFieldPropTypes, 'type', 'mask', 'maskHint', 'pipe', 'getValue', 'ref');

var DateField =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DateField, _React$Component);

  function DateField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getValue = function () {
      if (!_this.input) {
        return null;
      }

      return _this.input.getValue();
    };

    _this.triggerFocus = function () {
      return _this.input.wrapped.FormComponent.triggerFocus();
    };

    return _this;
  }

  var _proto = DateField.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return React.createElement(MaskedTextField, _extends({
      type: "tel",
      mask: mask,
      maskHint: hint,
      pipe: pipe,
      getValue: getValue,
      ref: function ref(_ref) {
        return _this2.input = _ref;
      }
    }, this.props));
  };

  return DateField;
}(React.Component);

DateField.propTypes = dateFieldPropTypes;
DateField.defaultProps = {};
export default DateField;