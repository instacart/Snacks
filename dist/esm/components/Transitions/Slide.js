import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
var TIMEOUT = 0;
var TRASITION_TIME = 200;
var OFFSET = 200;
var TIMING_FUNCTION = 'ease-in-out';
var AXIS = 'x';

var Slide =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Slide, _PureComponent);

  function Slide() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.renderChild = function (state) {
      var _this$props = _this.props,
          style = _this$props.style,
          children = _this$props.children,
          containerStyle = _this$props.containerStyle;

      var styles = _extends({}, _this.initialStyles, _this.transitionStyles[state], containerStyle);

      var topLevelStyle = _extends({
        overflowY: 'hidden',
        overflowX: 'visible'
      }, style);

      return React.createElement("div", {
        style: topLevelStyle
      }, React.createElement("div", {
        style: styles
      }, children));
    };

    return _this;
  }

  var _proto = Slide.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        inProp = _this$props2["in"],
        timeout = _this$props2.timeout,
        appear = _this$props2.appear;
    return React.createElement(Transition, {
      "in": inProp,
      appear: appear,
      timeout: timeout
    }, this.renderChild);
  };

  _createClass(Slide, [{
    key: "transformAxis",
    get: function get() {
      return this.props.axis === 'x' ? 'translateX' : 'translateY';
    }
  }, {
    key: "transitionStyles",
    get: function get() {
      var _this$props3 = this.props,
          offset = _this$props3.offset,
          invert = _this$props3.invert;
      var offsetDirection = invert ? '-' : '';
      return {
        entering: {
          transform: this.transformAxis + "(" + offsetDirection + offset + "px)"
        },
        entered: {
          transform: this.transformAxis + "(0)"
        }
      };
    }
  }, {
    key: "initialStyles",
    get: function get() {
      var _this$props4 = this.props,
          transitionTime = _this$props4.transitionTime,
          timingFunction = _this$props4.timingFunction,
          offset = _this$props4.offset,
          invert = _this$props4.invert;
      var offsetDirection = invert ? '' : '-';
      return {
        transform: this.transformAxis + "(" + offsetDirection + offset + "px)",
        transition: "all " + transitionTime + "ms " + timingFunction
      };
    }
  }]);

  return Slide;
}(PureComponent);

Slide.propTypes = {
  /**
   * A convenience prop that enables or disabled appear animations for
   * all children. Note that specifying this will override any defaults
   * set on individual children Transitions.
   */
  appear: PropTypes.bool,

  /** Axis that is animated */
  axis: PropTypes.oneOf(['x', 'y']),
  children: PropTypes.node,

  /** Optional style overrides for div that is offset and contains children. */
  containerStyle: PropTypes.object,

  /** Show the component; triggers the enter or exit states */
  "in": PropTypes.bool,

  /** Inverts offset direction, e.g. changes animation direction from right to left */
  invert: PropTypes.bool,

  /**
   * Number of pixels to offset the children. To have the children completely hidden
   * prior to animation, offset should equal the width of the widest child.
   */
  offset: PropTypes.number,

  /** Optional style overrides. */
  style: PropTypes.object,

  /** Delay in milliseconds until animation start. */
  timeout: PropTypes.number,

  /** Name of the transition-timing-function CSS property. */
  timingFunction: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),

  /** Time of animation in milliseconds. */
  transitionTime: PropTypes.number
};
Slide.defaultProps = {
  timeout: TIMEOUT,
  transitionTime: TRASITION_TIME,
  timingFunction: TIMING_FUNCTION,
  offset: OFFSET,
  axis: AXIS,
  style: {},
  "in": true,
  appear: true,
  invert: false
};
export default Slide;