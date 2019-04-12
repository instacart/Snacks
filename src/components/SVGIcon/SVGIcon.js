import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import * as icons from './icons'

const sizes = { small: '18px', standard: '24px', large: '36px' }

SVGIcon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
}

SVGIcon.defaultProps = {
  color: 'currentColor',
  size: 'standard',
}

function SVGIcon({ color, name, size, ...props }) {
  const Component = icons[name]
  return <Component aria-hidden fill={color} width={sizes[size]} height={sizes[size]} {...props} />
}

export default Radium(SVGIcon)
