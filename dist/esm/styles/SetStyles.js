import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import { Normalize, GlobalTheme } from '../index';

var getFonts = function getFonts(assetsUrl) {
  return "@font-face {\n      font-family: 'ic-icons';\n      font-weight: normal;\n      font-style: normal;\n      src: url('" + assetsUrl + "/ic-icons.eot');\n      src: url('" + assetsUrl + "/ic-icons.eot?#iefix') format('embedded-opentype'),\n           url('" + assetsUrl + "/ic-icons.woff') format('woff'),\n           url('" + assetsUrl + "/ic-icons.ttf') format('truetype'),\n           url('" + assetsUrl + "/ic-icons.svg#ic-icons') format('svg');\n    }\n\n    @font-face {\n      font-family: 'Open Sans';\n      font-weight: 300;\n      font-style: normal;\n      src: font-url('" + assetsUrl + "/OpenSans-Light/OpenSans-Light.eot');\n      src: font-url('" + assetsUrl + "/OpenSans-Light/OpenSans-Light.eot?#iefix') format('embedded-opentype'),\n           local('Open Sans Light'),\n           local('OpenSans-Light'),\n           url('" + assetsUrl + "/OpenSans-Light/OpenSans-Light.woff') format('woff'),\n           url('" + assetsUrl + "/OpenSans-Light/OpenSans-Light.ttf') format('truetype'),\n           url('" + assetsUrl + "/OpenSans-Light/OpenSans-Light.svg#OpenSans') format('svg');\n    }\n\n    @font-face {\n      font-family: 'Open Sans';\n      font-weight: 400;\n      font-style: normal;\n      src: url('" + assetsUrl + "/OpenSans/OpenSans.eot');\n      src: url('" + assetsUrl + "/OpenSans/OpenSans.eot?#iefix') format('embedded-opentype'),\n           local('Open Sans'),\n           local('OpenSans'),\n           url('" + assetsUrl + "/OpenSans/OpenSans.woff') format('woff'),\n           url('" + assetsUrl + "/OpenSans/OpenSans.ttf') format('truetype'),\n           url('" + assetsUrl + "/OpenSans/OpenSans.svg#OpenSans') format('svg');\n    }\n\n    @font-face {\n      font-family: 'Open Sans';\n      font-weight: 600;\n      font-style: normal;\n      src: url('" + assetsUrl + "/OpenSans-Semibold/OpenSans-Semibold.eot');\n      src: url('" + assetsUrl + "/OpenSans-Semibold/OpenSans-Semibold.eot?#iefix') format('embedded-opentype'),\n           local('Open Sans Semibold'),\n           local('OpenSans-Semibold'),\n           url('" + assetsUrl + "/OpenSans-Semibold/OpenSans-Semibold.woff') format('woff'),\n           url('" + assetsUrl + "/OpenSans-Semibold/OpenSans-Semibold.ttf') format('truetype'),\n           url('" + assetsUrl + "/OpenSans-Semibold/OpenSans-Semibold.svg#OpenSans') format('svg');\n    }\n\n    @font-face {\n      font-family: 'Open Sans';\n      font-weight: 700;\n      font-style: normal;\n      src: url('" + assetsUrl + "/OpenSans-Bold/OpenSans-Bold.eot');\n      src: url('" + assetsUrl + "/OpenSans-Bold/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),\n           local('Open Sans Bold'),\n           local('OpenSans-Bold'),\n           url('" + assetsUrl + "/OpenSans-Bold/OpenSans-Bold.woff') format('woff'),\n           url('" + assetsUrl + "/OpenSans-Bold/OpenSans-Bold.ttf') format('truetype'),\n           url('" + assetsUrl + "/OpenSans-Bold/OpenSans-Bold.svg#OpenSans') format('svg');\n    }";
};

var fontLoaded = false;

var writeFonts = function writeFonts(assetsUrl) {
  // if on server, just return
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = getFonts(assetsUrl);
  document.head.appendChild(style);
};

var Styles = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Styles, _Component);

  function Styles() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Styles.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (fontLoaded) {
      return;
    }

    writeFonts(this.props.assetsUrl);
    fontLoaded = true;
  };

  _proto.render = function render() {
    return React.createElement(Style, {
      rules: _extends({}, Normalize, GlobalTheme)
    });
  };

  return Styles;
}(Component), _class2.propTypes = {
  assetsUrl: PropTypes.string.isRequired
}, _temp)) || _class;

export default Styles;