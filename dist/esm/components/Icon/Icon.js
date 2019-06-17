import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import hexValues from './hexValues';
var baseStyles = {
  fontSize: '16px',
  position: 'relative',
  fontFamily: 'ic-icons',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
  speak: 'none',
  lineHeight: '1',
  fontSmoothing: 'antialiased',
  osxFontSmoothing: 'grayscale'
};

var getIcon = function getIcon(_ref) {
  var name = _ref.name,
      code = _ref.code;
  var iconCode = !code ? hexValues[name] : code;
  var codePoint = parseInt(iconCode, 16);
  return String.fromCodePoint(codePoint);
};

var Icon = function Icon(props) {
  var style = props.style,
      onClick = props.onClick;
  var icon = getIcon(props);
  return React.createElement("i", {
    style: [baseStyles, style],
    "aria-hidden": true,
    onClick: onClick
  }, icon);
};

Icon.propTypes = {
  /**
   * String name of icon - ex 'cart'
   */
  name: PropTypes.oneOf(Object.keys(hexValues)),

  /** Hexcode of desired icon from ic-icons */
  code: PropTypes.string,

  /** Optional style overrides */
  style: PropTypes.object,

  /** Callback function called after button click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   */
  onClick: PropTypes.func
};
export default Radium(Icon);