import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import RadioCheckboxBase from '../../base/RadioCheckboxBase';
import radioBaseSvg from '../../assets/radioBase.svg';
import radioSelectedSvg from '../../assets/radioSelected.svg';

var renderInputButton = function renderInputButton(isSelected, style) {
  var SvgComponent = isSelected ? radioSelectedSvg : radioBaseSvg;
  return React.createElement(SvgComponent, {
    "aria-hidden": "true",
    style: style
  });
};

var Radio = function Radio(props) {
  return React.createElement(RadioCheckboxBase, _extends({
    btnType: "radio",
    renderInputButton: renderInputButton
  }, props));
};

Radio.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string
  }),
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  style: PropTypes.shape({
    button: PropTypes.object,
    label: PropTypes.object,
    wrapEl: PropTypes.object
  }),
  value: PropTypes.string,
  wrapEl: PropTypes.string
};
export default Radio;