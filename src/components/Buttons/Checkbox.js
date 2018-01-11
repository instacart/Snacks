import React, { PropTypes } from 'react'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import svgCheckboxBase from '../../assets/checkboxBase.svg'
import svgCheckboxChecked from '../../assets/checkboxChecked.svg'
import svgCheckboxDisabled from '../../assets/checkboxDisabled.svg'

const ASSETS = {
  base: svgCheckboxBase,
  checked: svgCheckboxChecked,
  disabled: svgCheckboxDisabled,
}

const Checkbox = (props) => {
  return <RadioCheckboxBase {...props} assets={ASSETS} btnType='checkbox' />
}

Checkbox.propTypes = {
  aria          : PropTypes.shape({
    label         :PropTypes.string,
  }),
  children      : PropTypes.string,
  id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDisabled    : PropTypes.bool,
  isSelected    : PropTypes.bool,
  name          : PropTypes.string,
  onClick       : PropTypes.func,
  styles        : PropTypes.shape({
    button        : PropTypes.object,
    label         : PropTypes.object,
    wrapEl        : PropTypes.object,
  }),
  value         : PropTypes.string,
  wrapEl        : PropTypes.string,
}

export default Checkbox
