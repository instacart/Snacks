import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
var styles = {
  root: {
    position: 'absolute',
    zIndex: 99999
  }
};
var SPACING = 8;
var ARROW_SPACING = 6;
var ARROW_BORDER_SPACING = 2;

var TooltipPosition =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TooltipPosition, _PureComponent);

  function TooltipPosition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      overlayRect: {},
      arrowPosition: {}
    };

    _this.getTarget = function () {
      var target = _this.props.target;
      var targetNode = typeof target === 'function' ? target() : target;
      return targetNode && findDOMNode(targetNode) || null;
    };

    return _this;
  }

  var _proto = TooltipPosition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.calculatePosition();
  };

  _proto.getRect = function getRect(node) {
    var container = node.getBoundingClientRect();
    var offset = {
      top: container.top + window.pageYOffset,
      left: container.left + window.pageXOffset,
      width: container.width || node.offsetWidth,
      height: container.height || node.offsetHeight
    };
    return offset;
  };

  _proto.calculatePosition = function calculatePosition() {
    var placement = this.props.placement;
    var target = this.getTarget();
    var overlay = this.overlay;
    var targetRect = this.getRect(target);
    var documentWidth = document.documentElement.scrollWidth;
    var overlayRect = {
      top: targetRect.top,
      left: targetRect.left,
      width: overlay.offsetWidth,
      height: overlay.offsetHeight
    };
    var arrowPosition = {
      top: 0,
      left: 0,
      placement: placement
    };

    if (['top', 'bottom'].includes(placement)) {
      // Center it
      var targetCenterX = targetRect.width / 2;
      overlayRect.left = targetRect.left + targetCenterX - overlayRect.width / 2;
      var overlayDistanceFromRightEdge = overlayRect.left + overlayRect.width;

      if (placement === 'top') {
        overlayRect.top = targetRect.top - overlayRect.height - SPACING * 2;
        arrowPosition.top = Math.ceil(overlayRect.height) - ARROW_SPACING - ARROW_BORDER_SPACING / 2;
      } else {
        overlayRect.top = targetRect.top + targetRect.height + SPACING * 2;
        arrowPosition.top = -ARROW_SPACING;
      }

      if (overlayRect.left < 0) {
        // if over left edge of screen shift right to 8px of edge
        // or inline with target (if target is less than 8px from edge)
        overlayRect.left = Math.min(SPACING, targetRect.left);
      } else if (overlayDistanceFromRightEdge > documentWidth) {
        // If over right edge of screen shift left to 8px of edge or inline with target
        var overRightAmount = overlayDistanceFromRightEdge - documentWidth;
        var targetDistanceFromRight = documentWidth - (targetRect.left + targetRect.width);
        overlayRect.left = overlayRect.left - overRightAmount - Math.min(SPACING, targetDistanceFromRight);
      }

      arrowPosition.left = targetRect.left - overlayRect.left + targetCenterX - ARROW_SPACING - ARROW_BORDER_SPACING / 2; // eslint-disable-line max-len
    } else {
      var targetCenterY = targetRect.height / 2;
      var overlayCenterY = overlayRect.height / 2;
      overlayRect.top = targetRect.top + targetCenterY - overlayCenterY;
      arrowPosition.top = overlayCenterY - ARROW_SPACING - ARROW_BORDER_SPACING / 2;

      if (placement === 'right') {
        overlayRect.left = targetRect.left + targetRect.width + SPACING * 2;
        arrowPosition.left = -ARROW_SPACING;
      } else {
        overlayRect.left = targetRect.left - overlayRect.width - SPACING * 2;
        arrowPosition.left = overlayRect.width - ARROW_SPACING - ARROW_BORDER_SPACING / 2;
      }
    }

    this.setState({
      overlayRect: overlayRect,
      arrowPosition: arrowPosition
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        placement = _this$props.placement;
    var overlayRect = this.state.overlayRect;
    var computedStyles = styles.root;

    if (overlayRect.top) {
      computedStyles = _extends({}, computedStyles, {
        top: overlayRect.top,
        left: overlayRect.left
      });
    }

    var child = React.Children.only(children);
    child = cloneElement(child, {
      arrowPosition: this.state.arrowPosition,
      placement: placement
    });
    return React.createElement("div", {
      style: computedStyles,
      ref: function ref(node) {
        return _this2.overlay = node;
      }
    }, child);
  };

  return TooltipPosition;
}(PureComponent);

TooltipPosition.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']).isRequired
};
export default TooltipPosition;