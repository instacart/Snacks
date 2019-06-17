var _styles;

import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import responsive from '../../styles/responsive';
var styles = (_styles = {
  marginTop: 0,
  marginRight: 'auto',
  marginBottom: 0,
  marginLeft: 'auto'
}, _styles[responsive.xs] = {
  width: '100%'
}, _styles[responsive.sm] = {
  width: responsive.screenWidths.sm
}, _styles[responsive.md] = {
  width: responsive.screenWidths.md
}, _styles[responsive.mdLg] = {
  width: responsive.screenWidths.mdLg
}, _styles[responsive.lg] = {
  width: responsive.screenWidths.lg
}, _styles[responsive.xl] = {
  width: responsive.screenWidths.xl
}, _styles);

var Grid = function Grid(props) {
  return React.createElement("div", {
    style: [styles, props.style]
  }, props.children);
};

Grid.propTypes = {
  children: PropTypes.node,

  /** Optional style overrides */
  style: PropTypes.object
};
export default Radium(Grid);