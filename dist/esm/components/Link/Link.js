import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';

var noop = function noop() {}; // eslint-disable-line no-empty-function


var getStyles = function getStyles(props) {
  var _props$snacksTheme$co = props.snacksTheme.colors,
      action = _props$snacksTheme$co.action,
      actionHover = _props$snacksTheme$co.actionHover;
  return {
    cursor: 'pointer',
    textDecoration: 'none',
    color: action,
    ':hover': {
      color: actionHover,
      textDecoration: 'underline'
    }
  };
};

var Link = function Link(props) {
  var styles = getStyles(props);
  return React.createElement("a", _extends({
    href: props.href,
    style: [styles, props.style],
    onClick: function onClick(e) {
      props.onClick(e, props);
    }
  }, props.elementAttributes), props.children);
};

Link.propTypes = {
  /** `href` attribute for the anchor tag. */
  href: PropTypes.string,

  /** Callback fired when the link is clicked. */
  onClick: PropTypes.func,

  /** The link's text content. */
  children: PropTypes.node,

  /** Optional styles. */
  style: PropTypes.object,

  /** Any addional props. */
  elementAttributes: PropTypes.object,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
};
Link.defaultProps = {
  href: '#',
  onClick: noop
};
export default withTheme(Radium(Link));