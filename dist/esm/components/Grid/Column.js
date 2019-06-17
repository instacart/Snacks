import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import responsive from '../../styles/responsive';
import { supportsCSSGrid } from '../../utils/detectFeature';
var columnWidth = responsive.columnWidth;

var getLecacySizedStyles = function getLecacySizedStyles(sizes) {
  var _ref;

  return _ref = {
    display: 'inline-block'
  }, _ref[responsive.xs] = {
    display: 'block',
    width: '100%'
  }, _ref[responsive.sm] = {
    width: (sizes.sm || 1) * columnWidth + "px"
  }, _ref[responsive.md] = {
    width: (sizes.md || sizes.sm || 1) * columnWidth + "px"
  }, _ref[responsive.mdLg] = {
    width: (sizes.mdLg || sizes.md || sizes.sm || 1) * columnWidth + "px"
  }, _ref[responsive.lg] = {
    width: (sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1) * columnWidth + "px"
  }, _ref[responsive.xl] = {
    width: (sizes.xl || sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1) * columnWidth + "px"
  }, _ref;
};

var getSizedStyles = function getSizedStyles(sizes) {
  var _ref2;

  return _ref2 = {}, _ref2[responsive.sm] = {
    gridColumn: "span " + (sizes.sm || 1)
  }, _ref2[responsive.md] = {
    gridColumn: "span " + (sizes.md || sizes.sm || 1)
  }, _ref2[responsive.mdLg] = {
    gridColumn: "span " + (sizes.mdLg || sizes.md || sizes.sm || 1)
  }, _ref2[responsive.lg] = {
    gridColumn: "span " + (sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1)
  }, _ref2[responsive.xl] = {
    gridColumn: "span " + (sizes.xl || sizes.lg || sizes.mdLg || sizes.md || sizes.sm || 1)
  }, _ref2;
};

var Column = function Column(props) {
  var sizes = props.sizes;

  if (props.sizes.xs) {
    console.warn('xs size prop passed to Column!', 'This will be ignored. All columns at xs screen size are full-width. ', 'Please remove this definition. Sizes passed: ', props.sizes);
  }

  var styles = supportsCSSGrid() ? getSizedStyles(sizes) : getLecacySizedStyles(sizes);
  return React.createElement("div", {
    style: [styles, props.style]
  }, props.children);
};

Column.propTypes = {
  children: PropTypes.node,

  /** object where keys are breakpoint and value is number of columns to span at that breakpoint */
  sizes: PropTypes.shape({
    xs: PropTypes.number,
    // should never be passed
    sm: PropTypes.number,
    md: PropTypes.number,
    mdLg: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }),

  /** Optional style overrides */
  style: PropTypes.object
};
Column.defaultProps = {
  sizes: {}
};
export default Radium(Column);