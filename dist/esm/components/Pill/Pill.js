import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import spacing from '../../styles/spacing';
import withTheme from '../../styles/themer/withTheme';

var getStyles = function getStyles(props) {
  var colorProp = props.color,
      snacksTheme = props.snacksTheme;
  var color = snacksTheme.colors[colorProp] || colorProp;
  return _extends({
    backgroundColor: color,
    color: 'white',
    borderRadius: spacing.SM,
    paddingTop: 0,
    paddingBottom: 0
  }, spacing.PADDING_X_XS, spacing.MARGIN_XS, {
    textAlign: 'center',
    display: 'inline-block',
    width: 'auto'
  });
};

var Pill = function Pill(props) {
  var styles = getStyles(props);
  return React.createElement("div", _extends({
    style: [styles, props.style]
  }, props.elementAttributes), props.children);
};

Pill.propTypes = {
  /** Color of the pill. can be hex value or themer color key as string */
  color: PropTypes.string,

  /** The pill's text content. */
  children: PropTypes.node.isRequired,

  /** Optional styles. */
  style: PropTypes.object,

  /** Any addional props. */
  elementAttributes: PropTypes.object
};
Pill.defaultProps = {
  color: '#CC0033'
};
export default withTheme(Radium(Pill));