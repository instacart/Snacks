import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from 'react';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';
var TIMEOUT = 0;
var TRASITION_TIME = 400;
var TIMING_FUNCTION = 'ease-in-out';
var START_OPACITY = 0;
var END_OPACITY = 1;
var OPACITY_DEFAULT = {
  start: 0,
  end: 1
};

var Fade =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Fade, _PureComponent);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _this.renderChild = function (state) {
      var _this$props = _this.props,
          style = _this$props.style,
          children = _this$props.children;

      var styles = _extends({}, style, _this.initialStyles, _this.transitionStyles[state]);

      return React.createElement("div", {
        style: styles
      }, children);
    };

    return _this;
  }

  var _proto = Fade.prototype;

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

  _createClass(Fade, [{
    key: "opacity",
    get: function get() {
      var _this$props$opacity = this.props.opacity,
          _this$props$opacity$s = _this$props$opacity.start,
          start = _this$props$opacity$s === void 0 ? START_OPACITY : _this$props$opacity$s,
          _this$props$opacity$e = _this$props$opacity.end,
          end = _this$props$opacity$e === void 0 ? END_OPACITY : _this$props$opacity$e;
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "transitionStyles",
    get: function get() {
      var _this$opacity = this.opacity,
          opacityStart = _this$opacity.start,
          opacityEnd = _this$opacity.end;
      return {
        entering: {
          opacity: opacityStart
        },
        entered: {
          opacity: opacityEnd
        }
      };
    }
  }, {
    key: "initialStyles",
    get: function get() {
      var _this$props3 = this.props,
          transitionTime = _this$props3.transitionTime,
          timingFunction = _this$props3.timingFunction;
      var opacityStart = this.opacity.start;
      return {
        opacity: opacityStart,
        transition: "all " + transitionTime + "ms " + timingFunction
      };
    }
  }]);

  return Fade;
}(PureComponent);

Fade.propTypes = {
  /**
   * A convenience prop that enables or disabled appear animations for
   * all children. Note that specifying this will override any defaults
   * set on individual children Transitions.
   */
  appear: PropTypes.bool,
  children: PropTypes.node,

  /** Show the component; triggers the enter or exit states */
  "in": PropTypes.bool,

  /**
   * Settings for opacity during animation.
   *
   * Default start: 0
   * Default end: 1500 (If content's height is larger than 1500, pass the content's height here )
   */
  opacity: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number
  }),

  /** Optional style overrides. */
  style: PropTypes.object,

  /** Delay in milliseconds until animation start. */
  timeout: PropTypes.number,

  /** Time of animation in milliseconds. */
  transitionTime: PropTypes.number,

  /** Name of the transition-timing-function CSS property. */
  timingFunction: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
};
Fade.defaultProps = {
  timeout: TIMEOUT,
  transitionTime: TRASITION_TIME,
  timingFunction: TIMING_FUNCTION,
  opacity: OPACITY_DEFAULT,
  style: {},
  "in": true,
  appear: true
};
export default Fade;