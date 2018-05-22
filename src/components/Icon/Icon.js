import React from 'react'
import PropTypes from 'prop-types'
import * as icons from './icons'

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
}

function Icon({color, name, ...props}) {
  const Component = icons[name]
  return <Component aria-hidden={true} fill={color} {...props} />
}

export default Icon
