import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";

var _class, _class2, _temp;

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../styles';
import Icon from '../Icon/Icon';
import spacing from '../../styles/spacing';
/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

var styles = {
  root: _extends({
    backgroundColor: '#ffffff'
  }, spacing.PADDING_Y_SM, {
    paddingRight: 0,
    paddingLeft: 0,
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.GRAY_97
    },
    ':focus': {
      backgroundColor: colors.GRAY_97
    }
  }),
  focus: {
    backgroundColor: colors.GRAY_97
  },
  disabled: {
    color: colors.GRAY_74,
    backgroundColor: '#FFF',
    pointerEvents: 'none'
  },
  menuitem: {
    display: 'table'
  },
  iconContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '16px'
  },
  label: _extends({}, spacing.PADDING_X_SM, {
    paddingTop: 0,
    paddingBottom: 0,
    whiteSpace: 'nowrap'
  }),
  leftIconStyles: {
    fontSize: '22px'
  }
};

var MenuItem = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MenuItem, _React$Component);

  function MenuItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          index = _this$props.index,
          _onClick = _this$props._onClick,
          value = _this$props.value,
          label = _this$props.label,
          preventDefault = _this$props.preventDefault;
      preventDefault && e.preventDefault();
      var option = {
        value: value,
        label: label
      };
      !disabled && _onClick && _onClick(e, option, index);
    };

    _this.handleKeyDown = function (event) {
      switch (event.key) {
        case 'Enter':
          _this.props.preventDefault && event.preventDefault();

          _this.handleClick(event);

      }
    };

    _this.handleFocus = function (event) {
      var _this$props2 = _this.props,
          onFocus = _this$props2.onFocus,
          onMenuItemFocus = _this$props2.onMenuItemFocus,
          index = _this$props2.index;
      onMenuItemFocus && onMenuItemFocus(index);
      onFocus && onFocus(index, event);
    };

    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (!prevProps.focus && this.props.focus) {
      setTimeout(function () {
        // Checking the ref exists in case this component
        // unmounts before the callback runs.
        _this2.menuItem && _this2.menuItem.focus();
      }, 0);
    }
  };

  _proto.renderLeftIcon = function renderLeftIcon() {
    var _this$props3 = this.props,
        leftIcon = _this$props3.leftIcon,
        leftIconStyles = _this$props3.leftIconStyles;

    if (!leftIcon) {
      return;
    }

    var iconComponent = typeof leftIcon === 'string' ? React.createElement(Icon, {
      name: leftIcon,
      style: [styles.leftIconStyles, leftIconStyles]
    }) : leftIcon;
    return React.createElement("div", {
      style: styles.iconContainer
    }, React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, iconComponent));
  };

  _proto.renderMenuItem = function renderMenuItem() {
    var _this$props4 = this.props,
        children = _this$props4.children,
        label = _this$props4.label,
        labelStyles = _this$props4.labelStyles;

    if (children) {
      return children;
    }

    return React.createElement("div", {
      style: styles.menuitem
    }, this.renderLeftIcon(), React.createElement("div", {
      style: [styles.label, labelStyles]
    }, label));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props5 = this.props,
        disabled = _this$props5.disabled,
        role = _this$props5.role,
        style = _this$props5.style,
        tabIndex = _this$props5.tabIndex,
        useTabIndex = _this$props5.useTabIndex;
    return React.createElement("div", {
      ref: function ref(node) {
        return _this3.menuItem = node;
      },
      role: role,
      style: [styles.root, style, disabled && styles.disabled],
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      tabIndex: useTabIndex && !disabled ? tabIndex || 0 : undefined,
      onKeyDown: this.handleKeyDown
    }, this.renderMenuItem());
  };

  return MenuItem;
}(React.Component), _class2.propTypes = {
  /** Completely override the MenuItem rendering and create a custom MenuItem */
  children: PropTypes.node,

  /** Disable the MenuItem */
  disabled: PropTypes.bool,

  /** Focus the MenuItem */
  focus: PropTypes.bool,

  /** Index of MenuItem within Menu. Used for currentIndex */
  index: PropTypes.number,

  /** Text for the menu item */
  label: PropTypes.string.isRequired,

  /** Override styles of label */
  labelStyles: PropTypes.shape({}),

  /** Icon name or Icon component displayed left of label */
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** Override styles for leftIcon */
  leftIconStyles: PropTypes.shape({}),

  /** Callback function fired when the menu item is click. Overriden by parent Menu or DropdownMenu */
  _onClick: PropTypes.func,

  /** Callback function fired when the menu item is focused. */
  onFocus: PropTypes.func,

  /** Used by menu to keep track of current focus index. */
  onMenuItemFocus: PropTypes.func,

  /** Whether or not to prevent default when menu item is clicked */
  preventDefault: PropTypes.bool,

  /** Role HTML attribute */
  role: PropTypes.string,

  /** Customize style of MenuItem */
  style: PropTypes.shape({}),

  /** Override tabIndex property */
  tabIndex: PropTypes.number,

  /** Whether or not to use use the tabIndex HTML attribute */
  useTabIndex: PropTypes.bool,

  /** Underlying value. Also, passed into _onClick function */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
}, _class2.defaultProps = {
  disabled: false,
  role: 'menuitem',
  useTabIndex: true,
  focus: false,
  preventDefault: true
}, _class2.isSnacksMenuItem = true, _temp)) || _class;

export default MenuItem;