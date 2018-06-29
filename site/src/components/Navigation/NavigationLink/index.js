import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import * as styles from './styles'

function NavigationLink({title, path}) {
  return (
    <NavLink to={path}
      style={styles.link}
      activeStyle={styles.linkActive}
    >
      <span style={styles.text}>{title}</span>
    </NavLink>
  )
}

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Radium(NavigationLink)
