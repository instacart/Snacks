import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../styles/colors';
import withTheme from '../styles/themer/withTheme';
import { themePropTypes } from '../styles/themer/utils';

var NoOp = function NoOp() {}; // eslint-disable-line no-empty-function


var INPUT_BTN_SIZE = 22;

var getStyles = function getStyles(props) {
  return {
    button: {
      position: 'relative'
    },
    inputBtn: {
      width: props.width || INPUT_BTN_SIZE,
      height: INPUT_BTN_SIZE,
      appearance: 'none',
      MsAppearance: 'none',
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      backgroundImage: 'none',
      position: 'absolute',
      opacity: 0,
      // Required for IE!
      top: 0,
      left: 0,
      cursor: 'pointer'
    },
    label: {
      marginLeft: 10,
      lineHeight: INPUT_BTN_SIZE + "px"
    },
    wrapEl: {
      display: 'flex'
    },
    disabled: {
      color: colors.GRAY_74
    }
  };
};

var getEnabledColor = function getEnabledColor(props, state) {
  return state.isSelected ? props.snacksTheme.colors.action : colors.GRAY_46;
};

var getInputStyles = function getInputStyles(props, state) {
  return {
    width: props.width || INPUT_BTN_SIZE,
    height: INPUT_BTN_SIZE,
    fill: props.isDisabled ? colors.GRAY_74 : getEnabledColor(props, state)
  };
};

var RadioCheckboxBase =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(RadioCheckboxBase, _React$PureComponent);

  function RadioCheckboxBase() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isSelected: _this.props.isSelected
    };

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          btnType = _this$props.btnType,
          onChange = _this$props.onChange;
      var isSelected = _this.state.isSelected;

      if (btnType === 'radio' && isSelected) {
        return;
      }

      _this.setState({
        isSelected: !isSelected
      });

      onChange(event, _extends({}, _this.props, {
        isSelected: !isSelected
      }));
    };

    return _this;
  }

  var _proto = RadioCheckboxBase.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var isSelected = nextProps.isSelected;

    if (this.props.isSelected !== isSelected) {
      this.setState({
        isSelected: isSelected
      });
    }
  };

  _proto.renderInputBtn = function renderInputBtn() {
    var _this$props2 = this.props,
        aria = _this$props2.aria,
        btnType = _this$props2.btnType,
        isDisabled = _this$props2.isDisabled,
        id = _this$props2.id,
        style = _this$props2.style,
        value = _this$props2.value,
        renderInputButton = _this$props2.renderInputButton;
    var isSelected = this.state.isSelected;
    var internalStyle = getStyles(this.props);
    return React.createElement("div", {
      style: _extends({}, internalStyle.button, style.button)
    }, renderInputButton(isSelected, getInputStyles(this.props, this.state)), React.createElement("input", {
      id: id,
      type: btnType,
      onChange: this.handleChange,
      style: _extends({}, internalStyle.inputBtn, style.inputBtn),
      value: value,
      checked: isSelected,
      disabled: isDisabled,
      "aria-label": aria.label,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus
    }));
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        labelText = _this$props3.children,
        id = _this$props3.id,
        style = _this$props3.style,
        wrapEl = _this$props3.wrapEl;
    var isDisabled = this.props.isDisabled;
    var Element = wrapEl;
    var internalStyle = getStyles(this.props);
    var isDisabledStyle = isDisabled ? internalStyle.disabled : {}; // ensure both text and id are supplied so the button and label are correctly associated

    if (labelText && id) {
      return React.createElement(Element, {
        style: _extends({}, internalStyle.wrapEl, style.wrapEl)
      }, this.renderInputBtn(), React.createElement("label", {
        htmlFor: id,
        style: _extends({}, internalStyle.label, style.label, isDisabledStyle)
      }, labelText));
    }

    return this.renderInputBtn();
  };

  return RadioCheckboxBase;
}(React.PureComponent);

RadioCheckboxBase.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string
  }),
  renderInputButton: PropTypes.func.isRequired,
  width: PropTypes.number,
  btnType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isSelected: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  style: PropTypes.shape({
    button: PropTypes.object,
    label: PropTypes.object,
    wrapEl: PropTypes.object,
    inputBtn: PropTypes.object
  }),
  snacksTheme: themePropTypes,
  value: PropTypes.string,
  wrapEl: PropTypes.string
};
RadioCheckboxBase.defaultProps = {
  aria: {},
  isSelected: false,
  onChange: NoOp,
  style: {},
  wrapEl: 'div'
};
export default withTheme(Radium(RadioCheckboxBase));