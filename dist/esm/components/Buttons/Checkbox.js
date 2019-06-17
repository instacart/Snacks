import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import RadioCheckboxBase from '../../base/RadioCheckboxBase';
import checkboxBaseSvg from '../../assets/checkboxBase.svg';
import checkboxSelectedSvg from '../../assets/checkboxSelected.svg';

var renderInputButton = function renderInputButton(isSelected, style) {
  var SvgComponent = isSelected ? checkboxSelectedSvg : checkboxBaseSvg;
  return React.createElement(SvgComponent, {
    "aria-hidden": "true",
    style: style
  });
};

var Checkbox = function Checkbox(props) {
  return React.createElement(RadioCheckboxBase, _extends({
    btnType: "checkbox",
    renderInputButton: renderInputButton
  }, props));
};

Checkbox.propTypes = {
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
export default Checkbox;