import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import spacing from '../../styles/spacing';

var styles = _extends({
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.16), 0 3px 10px 0 rgba(0, 0, 0, 0.23)',
  display: 'inline-block'
}, spacing.PADDING_Y_XS, {
  paddingRight: 0,
  paddingLeft: 0,
  overflowY: 'auto',
  userSelect: 'none',
  maxHeight: '500px',
  outline: 'none'
});

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Menu, _React$Component);

  function Menu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      currentTabIndex: null
    };

    _this.handleBlur = function (event) {
      var onBlur = _this.props.onBlur;
      var currentTarget = event.currentTarget;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          _this.setState({
            currentTabIndex: null
          }, function () {
            onBlur && onBlur(event);
          });
        }
      }, 0);
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;

      switch (event.key) {
        case 'ArrowDown':
          {
            event.preventDefault();

            _this.incrementTabIndex();

            break;
          }

        case 'ArrowUp':
          {
            event.preventDefault();

            _this.decrementTabIndex();

            break;
          }
      }

      onKeyDown && onKeyDown(event);
    };

    _this.handleMenuItemFocus = function (index) {
      _this.setState({
        currentTabIndex: index
      });
    };

    return _this;
  }

  var _proto = Menu.prototype;

  _proto.getMenuItemChildren = function getMenuItemChildren() {
    var children = this.props.children;
    var menuItemChildren = [];
    React.Children.map(children, function (child) {
      if (child.type && child.type.isSnacksMenuItem) {
        menuItemChildren.push(child);
      }
    });
    return menuItemChildren;
  };

  _proto.blur = function blur() {
    this.menu.blur();
  };

  _proto.focus = function focus() {
    this.menu.focus();
  };

  _proto.incrementTabIndex = function incrementTabIndex() {
    this.setState({
      currentTabIndex: this.nextValidTabIndex()
    });
  };

  _proto.decrementTabIndex = function decrementTabIndex() {
    this.setState({
      currentTabIndex: this.prevValidTabIndex()
    });
  };

  _proto.nextValidTabIndex = function nextValidTabIndex() {
    var currentTabIndex = this.state.currentTabIndex;
    var menuItemChildren = this.getMenuItemChildren();
    var maxIndex = menuItemChildren.length - 1;
    var newIndex = currentTabIndex !== null ? currentTabIndex + 1 : 0;

    for (var index = newIndex; index <= maxIndex; index++) {
      var menuItem = menuItemChildren[index];

      if (this.menuItemIsValid(menuItem)) {
        return index;
      }
    }

    return currentTabIndex;
  };

  _proto.prevValidTabIndex = function prevValidTabIndex() {
    var currentTabIndex = this.state.currentTabIndex;
    var menuItemChildren = this.getMenuItemChildren();

    for (var index = currentTabIndex - 1; index >= 0; index--) {
      var menuItem = menuItemChildren[index];

      if (this.menuItemIsValid(menuItem)) {
        return index;
      }
    }

    return currentTabIndex;
  };

  _proto.menuItemIsValid = function menuItemIsValid(menuItem) {
    return menuItem && !menuItem.props.disabled;
  };

  _proto.renderChildren = function renderChildren() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        onSelect = _this$props.onSelect;
    var currentTabIndex = this.state.currentTabIndex;
    var index = 0;
    return React.Children.map(children, function (child) {
      if (!React.isValidElement(child)) {
        throw new Error('Passing invalid element to Menu');
      } else if (child.type && child.type.isSnacksMenuItem) {
        var component = React.cloneElement(child, {
          index: index,
          focus: currentTabIndex === index,
          _onClick: onSelect,
          onMenuItemFocus: _this2.handleMenuItemFocus
        });
        index += 1;
        return component;
      }

      return child;
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        ariaHidden = _this$props2.ariaHidden,
        style = _this$props2.style,
        role = _this$props2.role;

    var mergedStyles = _extends({}, styles, style);

    return React.createElement("div", {
      ref: function ref(node) {
        return _this3.menu = node;
      },
      role: role,
      style: mergedStyles,
      onKeyDown: this.handleKeyDown,
      onBlur: this.handleBlur,
      "aria-hidden": ariaHidden,
      tabIndex: -1
    }, this.renderChildren());
  };

  return Menu;
}(React.Component);

Menu.propTypes = {
  /** aria-hidden HTML attribute */
  ariaHidden: PropTypes.bool,

  /** MenuItems or Divider */
  children: PropTypes.node.isRequired,

  /** Callback function fired on key down */
  onKeyDown: PropTypes.func,

  /** Callback function fired when a MenuItem is selected */
  onSelect: PropTypes.func,

  /** Callback function fired when a Menu is blurred */
  onBlur: PropTypes.func,

  /** Role HTML attribute */
  role: PropTypes.string,

  /** Customize style of menu parent */
  style: PropTypes.shape({})
};
Menu.defaultProps = {
  role: 'menu',
  ariaHidden: false,
  style: {},
  onSelect: function onSelect() {} // eslint-disable-line no-empty-function

};
export default Menu;