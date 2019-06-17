import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import * as icons from './icons';
var sizes = {
  small: '18px',
  standard: '24px',
  large: '36px'
};
SVGIcon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes))
};
SVGIcon.defaultProps = {
  color: 'currentColor',
  size: 'standard'
};

function SVGIcon(_ref) {
  var color = _ref.color,
      name = _ref.name,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["color", "name", "size"]);

  var Component = icons[name];
  return React.createElement(Component, _extends({
    "aria-hidden": true,
    fill: color,
    width: sizes[size],
    height: sizes[size]
  }, props));
}

export default Radium(SVGIcon);