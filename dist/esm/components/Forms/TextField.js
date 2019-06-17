import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

var _class, _class2, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
import FormComponent from './FormComponent';
import ValidationError from './ValidationError';
import FloatingLabel from './FloatingLabel';
import TextFieldHint from './TextFieldHint';
import ServerError from './ServerError';
import HelperText from './HelperText';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import spacing from '../../styles/spacing';
var styles = {
  wrapper: {
    cursor: 'auto',
    display: 'inline-block',
    position: 'relative',
    width: '343px'
  },
  inputContainer: {
    borderRadius: '4px',
    position: 'relative'
  },
  input: _extends({
    backgroundColor: '#FFF',
    border: "solid 1px " + colors.GRAY_74,
    borderRadius: '4px',
    boxSizing: 'border-box',
    color: colors.GRAY_20,
    fontSize: '16px',
    height: '56px',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: '25px'
  }, spacing.PADDING_X_XS, {
    paddingBottom: spacing.XS,
    position: 'relative',
    width: '100%',
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)'
  }),
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
    width: '162px'
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

var TextField = withTheme(_class = FormComponent(_class = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TextField, _React$Component);

  function TextField() {
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

      return _this.input.value;
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

      onChange && onChange(e, value);
    };

    _this.handleInputFocus = function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    };

    _this.handleInputBlur = function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.handleKeyDown = function (e) {
      _this.props.onKeyDown(e);
    };

    _this.triggerFocus = function () {
      return _this.input.focus();
    };

    return _this;
  }

  var _proto = TextField.prototype;

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
        floatingLabelText = _this$props.floatingLabelText,
        defaultValue = _this$props.defaultValue,
        disabled = _this$props.disabled,
        fullWidth = _this$props.fullWidth,
        halfWidth = _this$props.halfWidth,
        hasError = _this$props.hasError,
        hintText = _this$props.hintText,
        id = _this$props.id,
        inputStyle = _this$props.inputStyle,
        isValid = _this$props.isValid,
        name = _this$props.name,
        required = _this$props.required,
        serverError = _this$props.serverError,
        type = _this$props.type,
        validationErrorText = _this$props.validationErrorText,
        style = _this$props.style,
        value = _this$props.value,
        helperText = _this$props.helperText,
        autoComplete = _this$props.autoComplete,
        snacksTheme = _this$props.snacksTheme,
        elementAttributes = _this$props.elementAttributes;
    var _this$state = this.state,
        hasValue = _this$state.hasValue,
        isFocused = _this$state.isFocused;
    var snacksStyles = getSnackStyles(snacksTheme);
    var inputId = id;
    var showHintText = hintText && !hasValue && isFocused;
    return React.createElement("div", {
      style: [styles.wrapper, fullWidth && styles.fullWidth, halfWidth && styles.halfWidth, style]
    }, serverError && !disabled && !isValid && React.createElement(ServerError, {
      text: serverError
    }), React.createElement("div", {
      style: styles.inputContainer
    }, floatingLabelText && React.createElement(FloatingLabel, {
      text: floatingLabelText,
      "float": isFocused || hasValue,
      disabled: disabled,
      isActive: isFocused,
      hasError: hasError,
      htmlFor: inputId,
      snacksTheme: snacksTheme
    }), hintText && React.createElement(TextFieldHint, {
      inputId: "hint_" + inputId,
      text: hintText,
      show: showHintText,
      disabled: disabled
    }), React.createElement("input", _extends({
      value: value,
      id: inputId,
      ref: function ref(node) {
        _this2.input = node;
      },
      defaultValue: value !== undefined ? undefined : defaultValue,
      disabled: disabled,
      name: name,
      type: type,
      "aria-required": required,
      "aria-invalid": hasError,
      "aria-describedby": [hasError ? "error_" + inputId : null, hintText ? "hint_" + inputId : null].filter(Boolean).join(' '),
      style: [styles.input, inputStyle, disabled && styles.inputDisabled, !disabled && hasError && styles.inputError, isFocused && !hasError && snacksStyles.highlight],
      onBlur: this.handleInputBlur,
      onChange: this.handleInputChange,
      onFocus: this.handleInputFocus,
      onKeyDown: this.handleKeyDown,
      autoComplete: autoComplete,
      placeholder: ""
    }, elementAttributes))), React.createElement(ValidationError, {
      text: validationErrorText,
      show: !disabled && !isValid && !serverError,
      inputId: inputId
    }), React.createElement(HelperText, {
      helperText: helperText
    }));
  };

  return TextField;
}(React.Component), _class2.propTypes = {
  /** Name of the field */
  name: PropTypes.string.isRequired,

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

  /** Hint text will show up when input is focused and there is no value */
  hintText: PropTypes.string,

  /** Uniq id for input */
  id: PropTypes.string,

  /** Style for input */
  inputStyle: PropTypes.object,

  /** Set by FormComponent by default.   */
  isValid: PropTypes.bool,

  /** onFocus callback */
  onFocus: PropTypes.func,

  /** onChange callback */
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

  /** Input type ie. 'text', 'email', password, etc..  */
  type: PropTypes.string,

  /** Text to show for validation error  */
  validationErrorText: PropTypes.string,

  /** Value will make TextField a controlled component  */
  value: PropTypes.string,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes,

  /** Any additonal props to add to the element (e.g. data attributes) */
  elementAttributes: PropTypes.object
}, _class2.defaultProps = {
  autoComplete: 'on',
  disabled: false,
  type: 'text',
  defaultValue: null,
  onKeyDown: function onKeyDown() {} // eslint-disable-line no-empty-function

}, _temp)) || _class) || _class) || _class;

export default TextField;