import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import bkgSvgBase from '../../assets/radioBase.svg'
import bkgSvgSelected from '../../assets/radioSelected.svg'

const renderInputButton = (isSelected, style) => {
  const SvgComponent = isSelected ? bkgSvgSelected : bkgSvgBase
  return <SvgComponent aria-hidden="true" style={style}/>
}

const Radio = (props) => {
  return (
    <RadioCheckboxBase
      btnType='radio'
      renderInputButton={renderInputButton}
      {...props}
    />
  )
}

Radio.propTypes = {
  aria          : PropTypes.shape({
    label         :PropTypes.string,
  }),
  children      : PropTypes.string,
  id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled    : PropTypes.bool,
  isSelected    : PropTypes.bool,
  name          : PropTypes.string,
  onChange      : PropTypes.func,
  onBlur        : PropTypes.func,
  onFocus       : PropTypes.func,
  style         : PropTypes.shape({
    button        : PropTypes.object,
    label         : PropTypes.object,
    wrapEl        : PropTypes.object,
  }),
  value         : PropTypes.string,
  wrapEl        : PropTypes.string,
}

export default Radio
