import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import NavigationPill from './NavigationPill';
import ScrollTrack from '../ScrollTrack/ScrollTrack';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
var styles = {
  labelStyles: {
    marginRight: '10px'
  },
  wrapperStyles: _extends({
    display: 'inline-block',
    height: '56px',
    minWidth: '100%'
  }, spacing.PADDING_TOP_XS, spacing.PADDING_RIGHT_XS, spacing.PADDING_BOTTOM_XS, spacing.PADDING_LEFT_MD, {
    backgroundColor: colors.WHITE,
    boxSizing: 'border-box'
  }),
  pillsContainerStyles: {
    display: 'inline-block',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0'
  }
};

var NavigationPills = function NavigationPills(props) {
  var renderLabel = function renderLabel() {
    if (!props.label) {
      return;
    } // eslint-disable-next-line jsx-a11y/label-has-associated-control


    return React.createElement("label", {
      style: styles.labelStyles
    }, props.label);
  };

  var renderPill = function renderPill(pill, idx) {
    return React.createElement(NavigationPill, {
      isActive: props.activePill === pill.text,
      onClick: function onClick(e) {
        return props.onPillClick(e, pill);
      },
      text: pill.text,
      key: "pill-" + idx,
      elementAttributes: pill.elementAttributes,
      anchorItemAttributes: pill.anchorItemAttributes
    });
  };

  var pillsContainerStyles = styles.pillsContainerStyles,
      wrapperStyles = styles.wrapperStyles;

  if (!props.pills || props.pills.length <= 1) {
    return null;
  }

  return React.createElement(ScrollTrack, null, React.createElement("div", _extends({
    style: wrapperStyles,
    ref: "pillsTrack"
  }, props.elementAttributes), renderLabel(), React.createElement("ul", _extends({
    style: pillsContainerStyles
  }, props.listItemAttributes), props.pills.map(renderPill))));
};

NavigationPills.propTypes = {
  /** Any additonal props to add to the element (e.g. data attributes). */
  elementAttributes: PropTypes.object,

  /** Any additonal props to add to the inner ul element (e.g. data attributes). */
  listItemAttributes: PropTypes.object,

  /** array of pill objects */
  pills: PropTypes.array,

  /** Callback function called after pill click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {props} object All the props passed to the component
   */
  onPillClick: PropTypes.func,

  /** optional label placed in front of pills */
  label: PropTypes.string,

  /** string matching the text of one of the pills. Determines which pill is active, if any */
  activePill: PropTypes.string
};
NavigationPills.defaultProps = {
  elementAttributes: {}
};
export default Radium(NavigationPills);