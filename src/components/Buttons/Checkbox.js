import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import checkboxBaseSvg from '../../assets/checkboxBase.svg'
import checkboxSelectedSvg from '../../assets/checkboxSelected.svg'
import checkboxIndeterminateSvg from '../../assets/checkboxIndeterminate.svg'

const renderInputButton = (isSelected, style, isIndeterminate) => {
  const SvgComponent = isIndeterminate ? checkboxIndeterminateSvg : isSelected ? checkboxSelectedSvg : checkboxBaseSvg
  return <SvgComponent aria-hidden="true" style={style} />
}

const Checkbox = props => {
  return <RadioCheckboxBase btnType="checkbox" renderInputButton={renderInputButton} {...props} />
}

Checkbox.propTypes = {
  aria: PropTypes.shape({
    label: PropTypes.string,
  }),
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
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

export default Checkbox
