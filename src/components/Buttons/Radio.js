import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import bkgSvgBase from '../../assets/radioBase.svg'
import bkgSvgSelected from '../../assets/radioSelected.svg'

const BKG_SVG_SPRITES = {
  base:       bkgSvgBase,
  selected:   bkgSvgSelected,
}

const Radio = React.forwardRef((props, ref) => {
  return (
    <RadioCheckboxBase
      btnType='radio'
      bkgSvgSprites={BKG_SVG_SPRITES}
      forwardedRef={ref}
      {...props}
    />
  )
})

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
  style         : PropTypes.shape({
    button        : PropTypes.object,
    label         : PropTypes.object,
    wrapEl        : PropTypes.object,
  }),
  value         : PropTypes.string,
  wrapEl        : PropTypes.string,
}

export default Radio
