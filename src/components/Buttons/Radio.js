import React, { PropTypes } from 'react'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import svgRadioBase from '../../assets/radioBase.svg'
import svgRadioChecked from '../../assets/radioChecked.svg'

const ASSETS = {
  btnBkg: {
    base: svgRadioBase,
    checked: svgRadioChecked,
  }
}

const Radio = (props) => {
  return <RadioCheckboxBase {...props} assets={ASSETS} btnType='radio' />
}

Radio.propTypes = {
  aria          : PropTypes.shape({
    label         :PropTypes.string,
  }),
  children      : PropTypes.string,
  id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

export default Radio
