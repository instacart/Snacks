import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
import FormComponent from './FormComponent';
import DropdownMenu from '../Menus/DropdownMenu';
import ValidationError from './ValidationError';
import ServerError from './ServerError';
import TextFieldHint from './TextFieldHint';
import FloatingLabel from './FloatingLabel';
import Icon from '../Icon/Icon';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import spacing from '../../styles/spacing';
/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

var styles = {
  root: {
    display: 'inline-block',
    position: 'relative',
    width: '343px'
  },
  triggerContainer: {
    borderRadius: '4px',
    position: 'relative'
  },
  trigger: {
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
    paddingTop: '25px',
    paddingRight: '25px',
    paddingBottom: spacing.XS,
    paddingLeft: spacing.XS,
    outline: 'none',
    position: 'relative',
    WebkitOpacity: 1,
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    ':hover': {
      cursor: 'pointer'
    }
  },
  triggerDisabled: {
    border: "1px dashed " + colors.GRAY_74,
    backgroundColor: colors.GRAY_93,
    color: colors.GRAY_46,
    ':hover': {
      cursor: 'not-allowed'
    }
  },
  menu: {
    width: '100%'
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    position: 'absolute',
    right: '8px',
    top: '22px'
  },
  icon: {
    transition: 'transform 100ms',
    userSelect: 'none'
  },
  iconError: {
    color: colors.RED_700
  },
  iconOpen: {
    transform: 'rotate(180deg)'
  },
  iconDisabled: {
    color: colors.GRAY_46
  },
  labelContainer: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    userSelect: 'none',
    display: 'inline-block'
  },
  floatingLabel: {
    position: 'absolute',
    top: 0,
    left: 0,
    ':hover': {
      cursor: 'pointer'
    }
  },
  error: {
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

var noOp = function noOp() {}; // eslint-disable-line no-empty-function


var getSnackStyles = function getSnackStyles(snacksTheme) {
  var action = snacksTheme.colors.action;
  return {
    highlight: {
      border: "1px solid " + action
    },
    icon: {
      color: action
    }
  };
};

var Select = withTheme(_class = FormComponent(_class = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Select, _React$PureComponent);

  function Select() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isOpen: false,
      selectedOption: _this.props.defaultOption || _this.props.selectedOption || null
    };

    _this.getValue = function () {
      return _this.state.selectedOption && _this.state.selectedOption.value || null;
    };

    _this.handleClose = function () {
      _this.trigger.focus();

      _this.props.onClose();
    };

    _this.handleRequestChange = function (open) {
      if (!_this.props.disabled) {
        _this.setState({
          isOpen: open
        });
      }
    };

    _this.handleFocus = function (e) {
      _this.setState({
        isFocused: true
      }, function () {
        _this.props.onFocus(e);
      });
    };

    _this.handleBlur = function (e) {
      _this.setState({
        isFocused: false
      }, function () {
        _this.props.onBlur(e);
      });
    };

    _this.handleSelect = function (e, option) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          selectedOption = _this$props.selectedOption; // For manual control

      if (!selectedOption) {
        _this.setState({
          selectedOption: option
        }, function () {
          onSelect(e, option);
        });
      } else {
        onSelect(e, option);
      }
    };

    return _this;
  }

  var _proto = Select.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var selectedOption = nextProps.selectedOption;

    if (selectedOption && selectedOption !== this.state.selectedOption) {
      this.setState({
        selectedOption: selectedOption
      });
    }
  };

  _proto.renderTrigger = function renderTrigger() {
    var _this2 = this;

    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        required = _this$props2.required,
        hasError = _this$props2.hasError,
        hintText = _this$props2.hintText,
        floatingLabelText = _this$props2.floatingLabelText,
        snacksTheme = _this$props2.snacksTheme;
    var snacksStyles = getSnackStyles(snacksTheme);
    var _this$state = this.state,
        isOpen = _this$state.isOpen,
        selectedOption = _this$state.selectedOption,
        isFocused = _this$state.isFocused;
    var hasValue = !!selectedOption;
    var showHintText = hintText && !hasValue && isOpen;
    return React.createElement("div", {
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      tabIndex: 0,
      role: "button",
      ref: function ref(node) {
        return _this2.trigger = node;
      }
    }, React.createElement("div", {
      style: [styles.trigger, disabled && styles.triggerDisabled, (isOpen || isFocused) && !hasError && snacksStyles.highlight, !disabled && hasError && styles.error],
      "aria-required": required,
      "aria-invalid": hasError
    }, React.createElement(FloatingLabel, {
      text: floatingLabelText,
      "float": isOpen || hasValue,
      disabled: disabled,
      isActive: isOpen || isFocused,
      hasError: hasError,
      style: styles.floatingLabel,
      snacksTheme: snacksTheme
    }), React.createElement("div", {
      style: styles.labelContainer
    }, hintText && React.createElement(TextFieldHint, {
      text: hintText,
      show: showHintText,
      disabled: disabled,
      style: styles.floatingLabel
    }), selectedOption && selectedOption.label), React.createElement("div", {
      style: styles.iconContainer
    }, React.createElement(Icon, {
      name: "arrowDownSmallBold",
      style: [styles.icon, snacksStyles.icon, isOpen && styles.iconOpen, disabled && styles.iconDisabled, !disabled && hasError && styles.iconError]
    }))));
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        children = _this$props3.children,
        disabled = _this$props3.disabled,
        id = _this$props3.id,
        isValid = _this$props3.isValid,
        halfWidth = _this$props3.halfWidth,
        fullWidth = _this$props3.fullWidth,
        onOpen = _this$props3.onOpen,
        serverError = _this$props3.serverError,
        style = _this$props3.style,
        validationErrorText = _this$props3.validationErrorText;
    var isOpen = this.state.isOpen;
    return React.createElement("div", {
      style: [styles.root, fullWidth && styles.fullWidth, halfWidth && styles.halfWidth, style]
    }, React.createElement("div", null, serverError && !disabled && !isValid && React.createElement(ServerError, {
      text: serverError
    }), React.createElement(DropdownMenu, {
      triggerElement: this.renderTrigger(),
      open: isOpen,
      onRequestChange: this.handleRequestChange,
      onSelect: this.handleSelect,
      menuProps: {
        style: styles.menu
      },
      onClose: this.handleClose,
      onOpen: onOpen
    }, children), React.createElement(ValidationError, {
      text: validationErrorText,
      show: !disabled && !isValid && !serverError,
      inputId: id
    })));
  };

  return Select;
}(React.PureComponent), _class2.propTypes = {
  /** Name of the field */
  name: PropTypes.string.isRequired,

  /** Children are passed to Menu and should be MenuItems or MenuDivider */
  children: PropTypes.node,

  /** DefaultOption */
  defaultOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  }),

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

  /** Hint text will show up when the Select is open and there is no value */
  hintText: PropTypes.string,

  /** Uniq id for Select */
  id: PropTypes.string,

  /** Handled by FormComponent after running built in validations */
  isValid: PropTypes.bool,

  /** onOpen callback */
  onOpen: PropTypes.func,

  /** onClose callback */
  onClose: PropTypes.func,

  /** onFocus callback */
  onFocus: PropTypes.func,

  /** onSelect callback returns option object {label: , value:} */
  onSelect: PropTypes.func,

  /** onBlur callback */
  onBlur: PropTypes.func,

  /** Mark the field as required.  */
  required: PropTypes.bool,

  /** Control the component selection manually */
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  }),

  /** Error from server to show ServerError message */
  serverError: PropTypes.string,

  /** Wrapper styles, mainly used for custom width */
  style: PropTypes.object,

  /** Text to show for validation error  */
  validationErrorText: PropTypes.string,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
}, _class2.defaultProps = {
  disabled: false,
  defaultOption: null,
  onFocus: noOp,
  // eslint-disable-line no-empty-function
  onBlur: noOp,
  // eslint-disable-line no-empty-function
  onOpen: noOp,
  // eslint-disable-line no-empty-function
  onClose: noOp,
  // eslint-disable-line no-empty-function
  onSelect: noOp // eslint-disable-line no-empty-function

}, _temp)) || _class) || _class) || _class;

export default Select;