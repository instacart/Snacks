import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _wrapNativeSuper from "@babel/runtime/helpers/esm/wrapNativeSuper";

/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import ScrollTrackPropTypes from './ScrollTrackPropTypes';

var EqualWidthTrackError =
/*#__PURE__*/
function (_TypeError) {
  _inheritsLoose(EqualWidthTrackError, _TypeError);

  function EqualWidthTrackError() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _TypeError.call.apply(_TypeError, [this].concat(args)) || this;
    _this.name = 'EqualWidthTrackError';
    return _this;
  }

  return EqualWidthTrackError;
}(_wrapNativeSuper(TypeError));
/**
 * A higher order component that will supply the wrapped
 * component with two additional props: `startIndex` and `lastIndex`. This will enable the
 * child to determine how it wants to treat elements that are shown within the track
 * or hidden off the overflow.
 */


var equalWidthTrack = function equalWidthTrack(childWidth) {
  if (!['number', 'function'].includes(typeof childWidth)) {
    throw new EqualWidthTrackError('childWidth must be a number or function bassed on props');
  }

  return function (WrappedComponent) {
    var EqualWidthTrack =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(EqualWidthTrack, _PureComponent);

      function EqualWidthTrack() {
        return _PureComponent.apply(this, arguments) || this;
      }

      var _proto = EqualWidthTrack.prototype;

      _proto.render = function render() {
        if (!this.props.trackProps) {
          return null;
        }

        var childWidthNumber = typeof childWidth === 'function' ? childWidth(this.props) : childWidth;
        var _this$props$trackProp = this.props.trackProps,
            left = _this$props$trackProp.left,
            parentWidth = _this$props$trackProp.parentWidth;
        var startIndex = Math.floor(Math.abs(left) / childWidthNumber);
        var lastIndex = Math.floor((Math.abs(left) + parentWidth) / childWidthNumber);
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          startIndex: startIndex,
          lastIndex: lastIndex
        }));
      };

      return EqualWidthTrack;
    }(PureComponent); // Access component that is being wrapped


    EqualWidthTrack.propTypes = {
      trackProps: ScrollTrackPropTypes.trackProps
    };
    EqualWidthTrack.WrappedComponent = WrappedComponent.WrappedComponent ? WrappedComponent.WrappedComponent : WrappedComponent;
    return EqualWidthTrack;
  };
};

export default equalWidthTrack;