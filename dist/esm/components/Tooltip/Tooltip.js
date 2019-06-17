import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InnerToolTip from './InnerToolTip';
import TooltipOverlay from './TooltipOverlay';

var noop = function noop() {}; // eslint-disable-line no-empty-function


var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Tooltip, _PureComponent);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      show: false
    };

    _this.handleToggle = function () {
      var _this$props = _this.props,
          onDismiss = _this$props.onDismiss,
          onShow = _this$props.onShow;

      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      }, function () {
        if (_this.state.show) {
          onShow();
        } else {
          onDismiss();
        }
      });
    };

    _this.handleHideToolTip = function () {
      var onDismiss = _this.props.onDismiss;

      _this.setState({
        show: false
      });

      onDismiss();
    };

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.renderTriggerElement = function renderTriggerElement() {
    var _this2 = this;

    var _this$props2 = this.props,
        target = _this$props2.target,
        isVisible = _this$props2.isVisible;
    var show = this.state.show;

    if (!target) {
      return;
    }

    var extraProps = isVisible == null ? {
      onClick: this.handleToggle.bind(this)
    } : {};
    return React.cloneElement(target, _extends({
      ref: function ref(node) {
        _this2.trigger = node;
      },
      'aria-haspopup': true,
      'aria-expanded': isVisible || show
    }, extraProps));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        children = _this$props3.children,
        placement = _this$props3.placement,
        size = _this$props3.size,
        style = _this$props3.style,
        arrowStyle = _this$props3.arrowStyle,
        snacksStyle = _this$props3.snacksStyle,
        isVisible = _this$props3.isVisible;
    return React.createElement("div", null, this.renderTriggerElement(), React.createElement(TooltipOverlay, {
      placement: placement,
      target: function target() {
        return _this3.trigger;
      },
      show: isVisible || this.state.show,
      onRootClose: this.handleHideToolTip
    }, React.createElement(InnerToolTip, {
      size: size,
      style: style,
      arrowStyle: arrowStyle,
      snacksStyle: snacksStyle
    }, children)));
  };

  return Tooltip;
}(PureComponent);

Tooltip.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  style: PropTypes.shape({
    border: PropTypes.string,
    padding: PropTypes.string,
    boxShadow: PropTypes.string
  }),
  arrowStyle: PropTypes.shape({
    border: PropTypes.string,
    boxShadowRight: PropTypes.string,
    boxShadowBottom: PropTypes.string,
    boxShadowLeft: PropTypes.string,
    boxShadowTop: PropTypes.string
  }),
  target: PropTypes.node.isRequired,
  snacksStyle: PropTypes.oneOf(['primary', 'secondary', 'dark']),
  onDismiss: PropTypes.func,
  onShow: PropTypes.func,
  isVisible: PropTypes.bool
};
Tooltip.defaultProps = {
  snacksStyle: 'dark',
  placement: 'bottom',
  size: 'small',
  onShow: noop,
  onDismiss: noop
};
export default Tooltip;