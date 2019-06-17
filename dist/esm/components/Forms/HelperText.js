import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
var style = {
  fontSize: '12px',
  lineHeight: '1.33',
  textAlign: 'right',
  color: colors.GRAY_46,
  width: '100%'
};

var HelperText = function HelperText(_ref) {
  var helperText = _ref.helperText;
  return helperText ? React.createElement("div", {
    style: style
  }, helperText) : null;
};

HelperText.propTypes = {
  /** Text */
  helperText: PropTypes.string
};
export default HelperText;