import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import RadioCheckboxBase from '../../base/RadioCheckboxBase';
import colors from '../../styles/colors';
import ZeroSvg from '../../assets/zero.svg';
import OneSvg from '../../assets/one.svg';
var SWITCH_WIDTH = 36;
var STYLES = {
  background: {
    borderRadius: '11px',
    position: 'relative',
    transition: 'background-color 200ms ease-in-out'
  },
  toggle: {
    "default": {
      height: '18px',
      width: '18px',
      backgroundColor: colors.WHITE,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      top: '2px',
      left: '2px',
      transition: 'left 200ms ease-in-out'
    },
    selected: {
      left: '16px'
    }
  },
  zero: {
    position: 'absolute',
    right: '5px',
    top: '7px'
  },
  one: {
    position: 'absolute',
    left: '8px',
    top: '7px'
  }
};

var _renderInputButton = function renderInputButton(isSelected, style, displayOnOffLabel) {
  return React.createElement("div", {
    style: [style, {
      backgroundColor: style.fill
    }, STYLES.background]
  }, displayOnOffLabel && isSelected && React.createElement(OneSvg, {
    style: STYLES.one
  }), displayOnOffLabel && !isSelected && React.createElement(ZeroSvg, {
    style: STYLES.zero
  }), React.createElement("div", {
    style: [STYLES.toggle["default"], isSelected && STYLES.toggle.selected]
  }));
};

var Switch = function Switch(props) {
  return React.createElement(RadioCheckboxBase, _extends({
    btnType: "checkbox",
    width: SWITCH_WIDTH,
    renderInputButton: function renderInputButton(isSelected, style) {
      return _renderInputButton(isSelected, style, props.displayOnOffLabel);
    }
  }, props));
};

Switch.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string
  }),
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.shape({
    button: PropTypes.object,
    label: PropTypes.object,
    wrapEl: PropTypes.object
  }),
  value: PropTypes.string,
  wrapEl: PropTypes.string,
  displayOnOffLabel: PropTypes.bool
};
export default Switch;