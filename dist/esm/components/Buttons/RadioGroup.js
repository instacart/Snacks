import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
var STYLE = {
  wrapEl: {}
};

var NoOp = function NoOp() {}; // eslint-disable-line no-empty-function


var initHasSelectedRadio;

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RadioGroup, _React$Component);

  function RadioGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      selectedBtn: _this.props.selectedBtn
    };

    _this.handleBtnChange = function (inputBtn) {
      var onChange = _this.props.onChange;
      return function (event) {
        onChange(event.target.value, inputBtn.props);

        _this.setState({
          selectedBtn: inputBtn
        });
      };
    };

    return _this;
  }

  var _proto = RadioGroup.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        style = _this$props.style,
        Element = _this$props.wrapEl;
    var childrenWithProps = React.Children.map(children, function (child) {
      var selectedBtn = _this2.state.selectedBtn;
      return React.cloneElement(child, {
        name: _this2.props.name,
        onChange: _this2.handleBtnChange(child),
        isSelected: child.props.id === (selectedBtn ? selectedBtn.props.id : false)
      });
    });
    return React.createElement(Element, {
      style: _extends({}, STYLE.wrapEl, style.wrapEl)
    }, childrenWithProps);
  };

  return RadioGroup;
}(React.Component);

RadioGroup.propTypes = {
  children: PropTypes.arrayOf(function (propValue, key) {
    var child = propValue[key];

    if (child.type.name !== 'Radio') {
      return new Error('Children must be an Array of Radio components.');
    }

    if (initHasSelectedRadio && child.props.isSelected) {
      return new Error('Only one radio button can be selected in the group.');
    }

    if (child.props.isSelected) {
      initHasSelectedRadio = true;
    }
  }).isRequired,
  name: PropTypes.string.isRequired,
  selectedBtn: PropTypes.instanceOf(Radio),
  onChange: PropTypes.func,
  wrapEl: PropTypes.string,
  style: PropTypes.shape({
    wrapEl: PropTypes.object
  })
};
RadioGroup.defaultProps = {
  onChange: NoOp,
  style: {},
  wrapEl: 'div'
};
export default RadioGroup;