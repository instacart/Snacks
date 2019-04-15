import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import radioBaseSvg from '../../assets/radioBase.svg'
import radioSelectedSvg from '../../assets/radioSelected.svg'

const renderInputButton = (isSelected, style) => {
  const SvgComponent = isSelected ? radioSelectedSvg : radioBaseSvg
  return <SvgComponent aria-hidden="true" style={style} />
}

const Radio = props => {
  return <RadioCheckboxBase btnType="radio" renderInputButton={renderInputButton} {...props} />
}

Radio.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string,
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
    wrapEl: PropTypes.object,
  }),
  value: PropTypes.string,
  wrapEl: PropTypes.string,
}

export default Radio
