import React from 'react'
import PropTypes from 'prop-types'
import * as icons from './icons'

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
}

function Icon({name, ...props}) {
  const Component = icons[name]
  return <Component aria-hidden={true} {...props} />
}

export default Icon
