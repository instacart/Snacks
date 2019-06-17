import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
var TIMEOUT = 0;
var TRASITION_TIME = 200;
var TIMING_FUNCTION = 'ease-in-out';
var START_SCALE = 0;
var END_SCALE = 1;
var START_MAX_SIZE = 0;
var END_MAX_SIZE = 1500;
var SCALE_DEFAULT = {
  start: 0,
  end: 1
};
var MAX_SIZE = {
  start: 0,
  end: 1500
};
var AXIS = 'y';

var Grow =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Grow, _PureComponent);

  function Grow() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.renderChild = function (state) {
      var _this$props = _this.props,
          style = _this$props.style,
          children = _this$props.children;

      var styles = _extends({}, _this.initialStyles, _this.transitionStyles[state], style);

      return React.createElement("div", {
        style: styles
      }, children);
    };

    return _this;
  }

  var _proto = Grow.prototype;

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

  _createClass(Grow, [{
    key: "scale",
    get: function get() {
      var _this$props$scale = this.props.scale,
          _this$props$scale$sta = _this$props$scale.start,
          start = _this$props$scale$sta === void 0 ? START_SCALE : _this$props$scale$sta,
          _this$props$scale$end = _this$props$scale.end,
          end = _this$props$scale$end === void 0 ? END_SCALE : _this$props$scale$end;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "maxSize",
    get: function get() {
      var _this$props$maxSize = this.props.maxSize,
          _this$props$maxSize$s = _this$props$maxSize.start,
          start = _this$props$maxSize$s === void 0 ? START_MAX_SIZE : _this$props$maxSize$s,
          _this$props$maxSize$e = _this$props$maxSize.end,
          end = _this$props$maxSize$e === void 0 ? END_MAX_SIZE : _this$props$maxSize$e;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "transformAxis",
    get: function get() {
      return this.props.axis === 'x' ? 'scaleX' : 'scaleY';
    }
  }, {
    key: "transitionStyles",
    get: function get() {
      var _this$scale = this.scale,
          startScale = _this$scale.start,
          endScale = _this$scale.end;
      var _this$maxSize = this.maxSize,
          startMaxSize = _this$maxSize.start,
          endMaxSize = _this$maxSize.end;
      return {
        entering: {
          maxWidth: startMaxSize,
          maxHeight: startMaxSize,
          transform: this.transformAxis + "(" + startScale + ")"
        },
        entered: {
          maxWidth: endMaxSize,
          maxHeight: endMaxSize,
          transform: this.transformAxis + "(" + endScale + ")"
        }
      };
    }
  }, {
    key: "initialStyles",
    get: function get() {
      var startScale = this.scale.start;
      var startMaxSize = this.maxSize.start;
      var _this$props3 = this.props,
          transitionTime = _this$props3.transitionTime,
          timingFunction = _this$props3.timingFunction;
      return {
        maxWidth: startMaxSize,
        maxHeight: startMaxSize,
        transform: this.transformAxis + "(" + startScale + ")",
        transition: "all " + transitionTime + "ms " + timingFunction
      };
    }
  }]);

  return Grow;
}(PureComponent);

Grow.propTypes = {
  /**
   * A convenience prop that enables or disabled appear animations for
   * all children. Note that specifying this will override any defaults
   * set on individual children Transitions.
   */
  appear: PropTypes.bool,

  /** Axis that is animated */
  axis: PropTypes.oneOf(['x', 'y']),
  children: PropTypes.node,

  /** Show the component; triggers the enter or exit states */
  "in": PropTypes.bool,

  /**
   * Settings for max-height and max-width during animation (this is what animates the element's height/width).
   *
   * Default start: 0
   * Default end: 1500 (If content's height is larger than 1500, pass the content's height here )
   */
  maxSize: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number
  }),

  /**
   * Settings for starting and ending transformation to scale.
   *
   * Default start: 0
   * Default end: 1
   */
  scale: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number
  }),

  /** Optional style overrides. */
  style: PropTypes.object,

  /** Delay in milliseconds until animation start. */
  timeout: PropTypes.number,

  /** Name of the transition-timing-function CSS property. */
  timingFunction: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),

  /** Time of animation in milliseconds. */
  transitionTime: PropTypes.number
};
Grow.defaultProps = {
  timeout: TIMEOUT,
  transitionTime: TRASITION_TIME,
  timingFunction: TIMING_FUNCTION,
  scale: SCALE_DEFAULT,
  maxSize: MAX_SIZE,
  axis: AXIS,
  style: {},
  "in": true,
  appear: true
};
export default Grow;