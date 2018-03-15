import React      from 'react'
import Radium     from 'radium'
import PropTypes  from 'prop-types'
import * as icons from './icons'

const baseStyles = {
  position: 'relative',
}

function Icon({ name, style, onClick }) {
  const IconRenderer = icons[name]
  return (
    <IconRenderer
      style={{...baseStyles, ...style}}
      aria-hidden={true}
      onClick={onClick}
    />
  )
}

Icon.propTypes = {
  /**
  * String name of icon - ex 'cart'
  */
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  /** Optional style overrides */
  style: PropTypes.object,
  /** Callback function called after button click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
  */
  onClick: PropTypes.func,
}

export default Radium(Icon)
