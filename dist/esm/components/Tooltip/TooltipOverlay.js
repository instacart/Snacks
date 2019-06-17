import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal';
import TooltipPosition from './TooltipPosition';
import TooltipRootClose from './TooltipRootClose';

var TooltipOverlay =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TooltipOverlay, _PureComponent);

  function TooltipOverlay() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TooltipOverlay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        show = _this$props.show,
        children = _this$props.children,
        target = _this$props.target,
        placement = _this$props.placement,
        onRootClose = _this$props.onRootClose,
        rootCloseEnabled = _this$props.rootCloseEnabled;

    if (!show) {
      return false;
    }

    var child = React.createElement(TooltipPosition, {
      target: target,
      placement: placement
    }, children);

    if (rootCloseEnabled) {
      child = React.createElement(TooltipRootClose, {
        onRootClose: onRootClose
      }, child);
    }

    return React.createElement(Portal, null, child);
  };

  return TooltipOverlay;
}(PureComponent);

TooltipOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired,
  onRootClose: PropTypes.func,
  rootCloseEnabled: PropTypes.bool
};
TooltipOverlay.defaultProps = {
  rootCloseEnabled: true
};
export default TooltipOverlay;