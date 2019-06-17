import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../styles';
import spacing from '../../styles/spacing';

var styles = _extends({
  backgroundColor: colors.GRAY_88,
  width: '100%'
}, spacing.MARGIN_Y_XS, {
  marginLeft: 0,
  marginRight: 0,
  height: 1,
  border: 'none'
});

var MenuDivider = function MenuDivider(props) {
  var style = props.style;
  return React.createElement("hr", {
    style: _extends({}, styles, style)
  });
};

MenuDivider.propTypes = {
  /** Override default styles */
  style: PropTypes.shape({})
};
export default MenuDivider;