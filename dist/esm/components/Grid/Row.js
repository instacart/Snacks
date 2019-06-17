import _extends from "@babel/runtime/helpers/esm/extends";

var _legacyStyles, _styles;

/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import responsive from '../../styles/responsive';
import { supportsCSSGrid } from '../../utils/detectFeature'; // used for browsers without css grid support

var legacyStyles = (_legacyStyles = {
  display: 'block'
}, _legacyStyles[responsive.sm] = {
  width: 6 * responsive.columnWidth + "px"
}, _legacyStyles[responsive.md] = {
  width: 8 * responsive.columnWidth + "px"
}, _legacyStyles[responsive.mdLg] = {
  width: 10 * responsive.columnWidth + "px"
}, _legacyStyles[responsive.lg] = {
  width: 12 * responsive.columnWidth + "px"
}, _legacyStyles[responsive.xl] = {
  width: 14 * responsive.columnWidth + "px"
}, _legacyStyles);
var styles = (_styles = {}, _styles[responsive.xs] = {
  display: 'block'
}, _styles[responsive.sm] = {
  display: 'grid',
  gridTemplateColumns: "repeat(6, " + responsive.columnWidth + "px)"
}, _styles[responsive.md] = {
  display: 'grid',
  gridTemplateColumns: "repeat(8, " + responsive.columnWidth + "px)"
}, _styles[responsive.mdLg] = {
  display: 'grid',
  gridTemplateColumns: "repeat(10, " + responsive.columnWidth + "px)"
}, _styles[responsive.lg] = {
  display: 'grid',
  gridTemplateColumns: "repeat(12, " + responsive.columnWidth + "px)"
}, _styles[responsive.xl] = {
  display: 'grid',
  gridTemplateColumns: "repeat(14, " + responsive.columnWidth + "px)"
}, _styles);

var getMaxColumnsStyles = function getMaxColumnsStyles(props) {
  var maxColumns = props.maxColumns;
  var override = supportsCSSGrid() ? {
    display: 'grid',
    gridTemplateColumns: "repeat(" + maxColumns + ", " + responsive.columnWidth + "px)",
    justifyContent: 'center'
  } : {
    width: maxColumns * responsive.columnWidth + "px",
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto'
  };

  if (maxColumns <= 6) {
    var _ref;

    return _ref = {}, _ref[responsive.md] = override, _ref[responsive.mdLg] = override, _ref[responsive.lg] = override, _ref[responsive.xl] = override, _ref;
  }

  if (maxColumns <= 8) {
    var _ref2;

    return _ref2 = {}, _ref2[responsive.mdLg] = override, _ref2[responsive.lg] = override, _ref2[responsive.xl] = override, _ref2;
  }

  if (maxColumns <= 10) {
    var _ref3;

    return _ref3 = {}, _ref3[responsive.lg] = override, _ref3[responsive.xl] = override, _ref3;
  }

  if (maxColumns <= 12) {
    var _ref4;

    return _ref4 = {}, _ref4[responsive.xl] = override, _ref4;
  }

  return {};
};

var fullWidthStyles = ['xs', 'sm', 'md', 'mdLg', 'lg', 'xl'].reduce(function (stylesAcc, size) {
  var _extends2;

  return _extends({}, stylesAcc, (_extends2 = {}, _extends2[responsive[size]] = {
    display: 'block',
    marginTop: 0,
    marginRight: "calc(-1 * (100vw - " + responsive.screenWidths[size] + "px) / 2)",
    marginBottom: 0,
    marginLeft: "calc(-1 * (100vw - " + responsive.screenWidths[size] + "px) / 2)"
  }, _extends2));
}, {
  width: '100vw',
  justifyContent: 'center'
});

var getFullWidthStyles = function getFullWidthStyles(props) {
  return props.forceFullPage ? fullWidthStyles : {};
};

var Row = function Row(props) {
  var componentStyles = supportsCSSGrid() ? styles : legacyStyles;
  return React.createElement("div", {
    style: [_extends({}, componentStyles, getMaxColumnsStyles(props), getFullWidthStyles(props)), props.style]
  }, props.children);
};

Row.propTypes = {
  children: PropTypes.node,

  /** Force Row to width of 100vw -- Snacks will add negative margin */
  forceFullPage: PropTypes.bool,

  /** Maximum number of columns this Row should grow to as screen width increases. Cannot exceed 14. */
  maxColumns: PropTypes.number,

  /** Optional style overrides */
  style: PropTypes.object
};
Row.defaultProps = {
  maxColumns: 14
};
export default Radium(Row);