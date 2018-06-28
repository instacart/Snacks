import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './styles'

function NavigationLink({title, path, style}) {
  if (!path) { return <div />}
  return (
    <div style={styles.navLinkRow}>
      <NavLink to={path}
        style={{...style, ...styles.navLinkInactive}}
        activeStyle={{color: '#FF8200'}}
      >
        <span style={styles.navLinkText} >{title}</span>
      </NavLink>
    </div>
  )
}

NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Radium(NavigationLink)
