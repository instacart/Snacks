import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Menu from './Menu';
import Slide from '../Transitions/Slide';
import Fade from '../Transitions/Fade';
var styles = {
  menuContainer: {
    position: 'absolute',
    width: '100%',
    display: 'block',
    pointerEvents: 'none'
  },
  menuContainerClosed: {
    zIndex: -9000,
    pointerEvents: 'none'
  },
  menuContainerOpen: {
    zIndex: 9000,
    pointerEvents: 'inherit'
  },
  transitionContainer: {
    paddingTop: '2px',
    paddingRight: '5px',
    paddingBottom: '5px',
    paddingLeft: '5px',
    width: '100%',
    transform: 'translateX(-5px)'
  }
};

var DropdownMenu = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      open: false
    };

    _this.handleSelect = function (e, option) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          onRequestChange = _this$props.onRequestChange;

      if (_this.controlledOpen()) {
        onRequestChange && onRequestChange(false);
      } else {
        // if multi then do not close
        _this.close();
      }

      findDOMNode(_this.trigger).focus();
      onSelect && onSelect(e, option);
    };

    _this.handleClick = function (event) {
      event.preventDefault();
      var _this$props2 = _this.props,
          open = _this$props2.open,
          onClick = _this$props2.onClick,
          onRequestChange = _this$props2.onRequestChange;

      if (_this.controlledOpen()) {
        onRequestChange && onRequestChange(!open);
        return;
      }

      if (!_this.state.open) {
        _this.open();
      } else {
        _this.close();
      }

      onClick && onClick(event);
    };

    _this.handleMenuBlur = function () {
      var onRequestChange = _this.props.onRequestChange;

      if (_this.controlledOpen()) {
        onRequestChange && onRequestChange(false);
      } else {
        _this.close();
      }
    };

    _this.handleKeyDown = function (event) {
      var onRequestChange = _this.props.onRequestChange;

      switch (event.key) {
        case 'Enter':
          if (!event.defaultPrevented && _this.controlledOpen()) {
            event.preventDefault();
            onRequestChange && onRequestChange(true);
          } else {
            event.preventDefault();

            if (_this.state.open) {
              _this.close();
            } else {
              _this.open();
            }
          }

          break;

        case 'Escape':
          event.preventDefault();

          if (_this.controlledOpen()) {
            onRequestChange && onRequestChange(false);
          } else {
            _this.state.open && _this.close();
          }

          break;
      }
    };

    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.open !== null && this.props.open !== nextProps.open) {
      if (nextProps.open) {
        this.open();
      } else {
        this.close();
      }
    }
  };

  _proto.controlledOpen = function controlledOpen() {
    return this.props.open !== null;
  };

  _proto.open = function open() {
    var _this2 = this;

    var onOpen = this.props.onOpen;
    this.setState({
      open: true
    }, function () {
      _this2.menu.focus();

      onOpen && onOpen();
    });
  };

  _proto.close = function close() {
    var _this3 = this;

    var onClose = this.props.onClose;
    this.setState({
      open: false
    }, function () {
      _this3.menu.blur();

      onClose && onClose();
    });
  };

  _proto.renderTriggerElement = function renderTriggerElement() {
    var _this4 = this;

    var triggerElement = this.props.triggerElement;
    var open = this.state.open;

    if (triggerElement) {
      return React.cloneElement(triggerElement, {
        ref: function ref(node) {
          _this4.trigger = node;
          var ref = triggerElement.ref;

          if (typeof ref === 'function') {
            ref(node);
          }
        },
        onMouseDown: this.handleClick,
        elementAttributes: {
          'aria-haspopup': true,
          'aria-expanded': open
        },
        'aria-haspopup': true,
        'aria-expanded': open
      });
    }
  };

  _proto.render = function render() {
    var _this5 = this;

    var _this$props3 = this.props,
        style = _this$props3.style,
        children = _this$props3.children,
        menuProps = _this$props3.menuProps,
        menuContainerStyle = _this$props3.menuContainerStyle;
    var isOpen = this.state.open;
    return React.createElement("div", {
      onKeyDown: this.handleKeyDown,
      style: style
    }, React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, this.renderTriggerElement()), React.createElement("div", {
      style: [styles.menuContainer, menuContainerStyle, isOpen && styles.menuContainerOpen, !isOpen && styles.menuContainerClosed]
    }, React.createElement(Slide, {
      "in": isOpen,
      axis: "y",
      style: styles.transitionContainer,
      offset: 30
    }, React.createElement(Fade, {
      "in": isOpen,
      transitionTime: 200
    }, React.createElement(Menu, _extends({
      ref: function ref(node) {
        return _this5.menu = node;
      },
      ariaHidden: !isOpen,
      onBlur: this.handleMenuBlur,
      onSelect: this.handleSelect
    }, menuProps), children)))));
  };

  return DropdownMenu;
}(React.Component), _class2.propTypes = {
  /** MenuItems or Divider */
  children: PropTypes.node.isRequired,

  /** React component or HTML that will be used as the dropdown trigger. ie. Button or Icon */
  triggerElement: PropTypes.element,

  /** Open and close menu manually */
  open: PropTypes.bool,

  /** Callback fired on dropdown close */
  onClose: PropTypes.func,

  /** Callback fired on click */
  onClick: PropTypes.func,

  /** Callback fired on dropdown open */
  onOpen: PropTypes.func,

  /** Callback function fired on key down */
  onKeyDown: PropTypes.func,

  /** Requesting to open/close for controlled open component. */
  onRequestChange: PropTypes.func,

  /** Callback function fired when a MenuItem is selected */
  onSelect: PropTypes.func,

  /** Customize style root element */
  style: PropTypes.shape({}),

  /** Customize style of menu parent */
  menuContainerStyle: PropTypes.shape({}),

  /** Props passed to Menu component */
  menuProps: PropTypes.shape({})
}, _class2.defaultProps = {
  open: null
}, _temp)) || _class;

export default DropdownMenu;