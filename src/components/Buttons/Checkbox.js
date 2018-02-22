import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import bkgSvgBase from '../../assets/checkboxBase.svg'
import bkgSvgSelected from '../../assets/checkboxSelected.svg'
import bkgSvgDisabled from '../../assets/checkboxDisabled.svg'

const BKG_SVG_SPRITES = {
  base:       bkgSvgBase,
  selected:   bkgSvgSelected,
  disabled:   bkgSvgDisabled,
}

const Checkbox = (props) => {
  return <RadioCheckboxBase btnType='checkbox' bkgSvgSprites={BKG_SVG_SPRITES} {...props} />
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
  onChange      : PropTypes.func,
  style         : PropTypes.shape({
    button        : PropTypes.object,
    label         : PropTypes.object,
    wrapEl        : PropTypes.object,
  }),
  value         : PropTypes.string,
  wrapEl        : PropTypes.string,
}

export default Checkbox
