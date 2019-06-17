import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
// Higher order component that force updates component on themer change
// and passes down theme through props
import React, { Component } from 'react';
import themer from './index';
import { cleanConfig, themePropTypes } from './utils';

var isStateless = function isStateless(component) {
  return !component.prototype.render;
};

function withTheme(InnerComponent) {
  var Wrapped =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Wrapped, _Component);

    function Wrapped() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _this.onThemeChange = function () {
        _this.forceUpdate();
      };

      return _this;
    }

    var _proto = Wrapped.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.unsubscribe = themer.subscribe(this.onThemeChange);
      this.validateSnacksTheme();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribe();
    };

    _proto.themeIsValid = function themeIsValid() {
      var snacksTheme = this.props.snacksTheme;
      return Boolean(snacksTheme) && typeof snacksTheme === 'object';
    };

    _proto.validateSnacksTheme = function validateSnacksTheme() {
      if (__DEV__) {
        // eslint-disable-line no-undef
        var snacksTheme = this.props.snacksTheme;
        var themeIsBad = snacksTheme && !Object.keys(cleanConfig(snacksTheme)).length;

        if (themeIsBad) {
          throw new Error("Recieved an invalid snacksTheme Prop. Expected undefined or an object and instead got " + typeof snacksTheme);
        }
      }
    };

    _proto.render = function render() {
      var _this2 = this;

      var getRef = function getRef(node) {
        return _this2.wrapped = node;
      };

      var _this$props = this.props,
          snacksTheme = _this$props.snacksTheme,
          rest = _objectWithoutPropertiesLoose(_this$props, ["snacksTheme"]);

      var theme = this.themeIsValid() ? snacksTheme : themer.themeConfig;
      return React.createElement(InnerComponent, _extends({
        ref: isStateless(InnerComponent) ? undefined : getRef,
        snacksTheme: theme
      }, rest));
    };

    return Wrapped;
  }(Component);

  Wrapped.displayName = "withTheme(" + (InnerComponent.name || InnerComponent.displayName || 'Component') + ")";
  Wrapped.propTypes = {
    snacksTheme: themePropTypes
  };
  return Wrapped;
}

export default withTheme;