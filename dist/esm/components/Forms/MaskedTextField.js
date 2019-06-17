import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

var _class, _class2, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import MaskedTextInput from 'react-text-mask';
import { colors } from '../../styles';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import FormComponent from './FormComponent';
import ValidationError from './ValidationError';
import FloatingLabel from './FloatingLabel';
import TextFieldHint from './TextFieldHint';
import ServerError from './ServerError';
import HelperText from './HelperText';
import spacing from '../../styles/spacing';

var NoOp = function NoOp() {}; // eslint-disable-line no-empty-function


var styles = {
  wrapper: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: 343
  },
  inputContainer: {
    borderRadius: 4,
    position: 'relative'
  },
  input: {
    backgroundColor: colors.WHITE,
    border: "solid 1px " + colors.GRAY_74,
    borderRadius: 4,
    boxSizing: 'border-box',
    color: colors.GRAY_20,
    fontSize: 16,
    height: 56,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: '25px',
    paddingRight: spacing.XS,
    paddingBottom: spacing.XS,
    paddingLeft: spacing.XS,
    outline: 'none',
    position: 'relative',
    width: '100%',
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)'
  },
  inputDisabled: {
    border: "1px dashed " + colors.GRAY_74,
    backgroundColor: colors.GRAY_93,
    color: colors.GRAY_46,
    cursor: 'not-allowed'
  },
  inputError: {
    border: "1px solid " + colors.RED_700,
    backgroundColor: '#FDE6EB'
  },
  fullWidth: {
    width: '100%'
  },
  halfWidth: {
    width: 162
  }
};

var getSnackStyles = function getSnackStyles(snacksTheme) {
  var action = snacksTheme.colors.action;
  return {
    highlight: {
      border: "1px solid " + action
    }
  };
};

var getInputSyles = function getInputSyles(_ref) {
  var props = _ref.props,
      theme = _ref.theme,
      isFocused = _ref.isFocused;
  var snacksStyles = getSnackStyles(theme);
  var disabled = props.disabled,
      hasError = props.hasError,
      inputStyle = props.inputStyle;
  var disabledStlyes = disabled ? styles.inputDisabled : {};
  var errorStyles = !disabled && hasError ? styles.inputError : {};
  var focusedStyles = isFocused && !hasError ? snacksStyles.highlight : {};
  return _extends({}, styles.input, inputStyle, disabledStlyes, errorStyles, focusedStyles);
};

export var maskedTextFieldPropTypes = {
  /** Name of the field */
  name: PropTypes.string.isRequired,

  /** Transforms the raw value from the input
   *
   * @example strips slashes from a phone number
   *   (value) => value.replace(NON_DIGIT_REGEX, '')
   * @param {string} value
   * @returns {string}
   */
  getValue: PropTypes.func.isRequired,

  /** The mask */
  mask: PropTypes.array.isRequired,

  /** The pipe mask */
  pipe: PropTypes.func,

  /** The mask hint */
  maskHint: PropTypes.string.isRequired,

  /** The type of the input */
  type: PropTypes.string.isRequired,

  /** HTML autocomplete attribute */
  autoComplete: PropTypes.string,

  /** DefaultValue for non controlled component */
  defaultValue: PropTypes.any,

  /** Disable the text field */
  disabled: PropTypes.bool,

  /** Text of label that will animate when TextField is focused */
  floatingLabelText: PropTypes.string,

  /** Sets width to 100% */
  fullWidth: PropTypes.bool,

  /** Sets width to 162px */
  halfWidth: PropTypes.bool,

  /** FormComponent error for validation */
  hasError: PropTypes.bool,

  /** Helper text will show up in bottom right corner below TextField */
  helperText: PropTypes.string,

  /** Uniq id for input */
  id: PropTypes.string,

  /** Style for input */
  inputStyle: PropTypes.object,

  /** Set by FormComponent by default.   */
  isValid: PropTypes.bool,

  /** onFocus callback */
  onFocus: PropTypes.func,

  /** onChange callback
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {String} value The value from the input with `(`, `)`, space, and `-` characters removed
   * @param {String} rawValue The raw value from the input
   */
  onChange: PropTypes.func,

  /** onBlur callback */
  onBlur: PropTypes.func,

  /** onKeyDown callback */
  onKeyDown: PropTypes.func,

  /** Mark the field as required.  */
  required: PropTypes.bool,

  /** Error from server to show ServerError message */
  serverError: PropTypes.string,

  /** Wrapper styles */
  style: PropTypes.object,

  /** Text to show for validation error  */
  validationErrorText: PropTypes.string,

  /** Value will make TextField a controlled component  */
  value: PropTypes.string,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
};

var MaskedTextField = withTheme(_class = FormComponent(_class = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MaskedTextField, _React$Component);

  function MaskedTextField() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      hasValue: _this.props.defaultValue !== null || Boolean(_this.props.value)
    };

    _this.getValue = function () {
      if (!_this.input) {
        return null;
      }

      return _this.props.getValue(_this.input.value);
    };

    _this.triggerFocus = function () {
      return _this.input.focus();
    };

    _this.handleInputChange = function (e) {
      var onChange = _this.props.onChange;
      var hasValue = _this.state.hasValue;
      var value = e.target.value; // Limit setState call to only when hasValue changes

      if (value && !hasValue) {
        _this.setState({
          hasValue: true
        });
      } else if (!value && hasValue) {
        _this.setState({
          hasValue: false
        });
      }

      onChange(e, _this.props.getValue(value), value);
    };

    _this.handleInputFocus = function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus(e);
    };

    _this.handleInputBlur = function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur(e);
    };

    _this.handleKeyDown = function (e) {
      _this.props.onKeyDown(e);
    };

    return _this;
  }

  var _proto = MaskedTextField.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.disabled && !this.props.disabled) {
      this.setState({
        isFocused: false
      });
    }

    if (!this.state.hasValue && nextProps.value) {
      this.setState({
        hasValue: true
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        mask = _this$props.mask,
        pipe = _this$props.pipe,
        maskHint = _this$props.maskHint,
        floatingLabelText = _this$props.floatingLabelText,
        defaultValue = _this$props.defaultValue,
        disabled = _this$props.disabled,
        fullWidth = _this$props.fullWidth,
        halfWidth = _this$props.halfWidth,
        hasError = _this$props.hasError,
        inputId = _this$props.id,
        isValid = _this$props.isValid,
        name = _this$props.name,
        required = _this$props.required,
        serverError = _this$props.serverError,
        validationErrorText = _this$props.validationErrorText,
        style = _this$props.style,
        value = _this$props.value,
        helperText = _this$props.helperText,
        autoComplete = _this$props.autoComplete,
        snacksTheme = _this$props.snacksTheme;
    var _this$state = this.state,
        hasValue = _this$state.hasValue,
        isFocused = _this$state.isFocused;
    return React.createElement("div", {
      style: [styles.wrapper, fullWidth && styles.fullWidth, halfWidth && styles.halfWidth, style]
    }, serverError && !disabled && !isValid && React.createElement(ServerError, {
      text: serverError
    }), React.createElement("div", {
      style: styles.inputContainer
    }, React.createElement(FloatingLabel, {
      text: floatingLabelText,
      "float": isFocused || hasValue,
      disabled: disabled,
      isActive: isFocused,
      hasError: hasError,
      htmlFor: inputId,
      style: {
        pointerEvents: 'none'
      },
      snacksTheme: snacksTheme
    }), React.createElement(TextFieldHint, {
      inputId: "hint_" + inputId,
      text: maskHint,
      show: !hasValue && isFocused,
      disabled: disabled
    }), React.createElement(MaskedTextInput, {
      mask: mask,
      pipe: pipe,
      id: inputId,
      guide: false,
      name: name,
      "aria-required": required,
      "aria-invalid": hasError,
      "aria-describedby": hasError ? "hint_" + inputId + " error_" + inputId : "hint_" + inputId,
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      onKeyDown: this.handleKeyDown,
      autoComplete: autoComplete,
      placeholder: "",
      defaultValue: value !== undefined ? undefined : defaultValue,
      disabled: disabled,
      keepCharPositions: true,
      type: this.props.type,
      render: function render(_ref2, props) {
        return React.createElement("input", _extends({
          ref: function ref(input) {
            _this2.input = input;

            _ref2(input);
          },
          style: getInputSyles({
            props: _this2.props,
            theme: snacksTheme,
            isFocused: isFocused
          })
        }, props));
      }
    })), React.createElement(ValidationError, {
      text: validationErrorText,
      show: !disabled && !isValid && !serverError,
      inputId: inputId
    }), React.createElement(HelperText, {
      helperText: helperText
    }));
  };

  return MaskedTextField;
}(React.Component), _class2.propTypes = maskedTextFieldPropTypes, _class2.defaultProps = {
  autoComplete: 'on',
  disabled: false,
  defaultValue: null,
  onChange: NoOp,
  onKeyDown: NoOp,
  onFocus: NoOp,
  onBlur: NoOp
}, _temp)) || _class) || _class) || _class;

export default MaskedTextField;