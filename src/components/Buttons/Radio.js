import React, { PropTypes } from 'react'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import svgRadioBtnBase from '../../assets/radioBtnBase.svg'
import svgRadioBtnChecked from '../../assets/radioBtnChecked.svg'

const ASSETS = {
  btnBkg: {
    base: svgRadioBtnBase,
    checked: svgRadioBtnChecked,
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
  isChecked     : PropTypes.bool,
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
